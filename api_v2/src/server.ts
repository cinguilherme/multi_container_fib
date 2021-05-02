import express from 'express';
import { contentsRouter } from './contents/routes';

const app = express()

app.get('/', (req: any, res: any) => {
    res.send({'hello': 'world'})
});

app.use(contentsRouter);


app.listen(3002, () => {
    console.log('server started and listening on port 3002');
});