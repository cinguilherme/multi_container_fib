const express = require('express');
const cors = require('cors');
const keys = require('./keys');
const redis = require('redis');

// express setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//postgres
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on("connect", (client) => {
    client
      .query("CREATE TABLE IF NOT EXISTS values (number INT)")
      .catch((err) => console.error(err));
});

const redisClient = redis.createClient({
    host: keys.redisHost,
    post: keys.redisPort,
    retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();

// express routes

app.get('/', (req, res) => {
    res.send({"hello": "world"});
});

app.get('/values/all', async (req, res) => {
    const values = await pgClient.query('select * from values');
    res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
    redisClient.hgetall('values', (err, values) => {
        res.send(values);
    });
});

app.post('/values', async (req, res) => {
    const index = req.body.index;

    if(parseInt(index) > 40){
        res.status(422).send("index to high");
    }

    redisClient.hset('values', index, 'nothing yet');
    redisPublisher.publish('insert', index);
    pgClient.query('insert into values (number) values ($1)', [index]);

    res.send({ working: true })
});

app.listen(5000, () => {
    console.log('listeing on 50000');
});