import { Router } from 'express'
import { getAllContents } from './controllers/allContents';

const contentsRouter = Router();

contentsRouter.get('/contents', getAllContents);

export { contentsRouter };