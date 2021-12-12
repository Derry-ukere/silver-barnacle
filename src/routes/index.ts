import { Router } from 'express';
import {handleRouteError} from '../shared/errors/handleRoutesError'
import authRouter from './auth'
import userRouter from './users'

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/auth', authRouter);

baseRouter.use(handleRouteError);
export default baseRouter;
