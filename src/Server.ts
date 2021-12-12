import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import { createConnection } from 'typeorm';
import {  connectionOptions} from '@db/index'
import {errorHandler} from './middlewares/errorHandler';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BaseRouter from './routes';
import logger from '@shared/Logger';

const app = express();
const { BAD_REQUEST } = StatusCodes;



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

//Connect to database
async function connectDb() {
    if (process.env.NODE_ENV !== 'test') {
        logger.info('establishing database connection')
       await createConnection(connectionOptions)
       logger.info('successfully conected to database')
    }
}

connectDb();

// Add APIs
app.use('/api', BaseRouter);



// Print API errors
app.use(errorHandler);


// Export express instance
export default app;
