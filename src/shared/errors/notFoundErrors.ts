import {Request, Response} from 'express'
import {StatusCodes} from 'http-status-codes'
import {CustomErrors} from './CustomErrors';



// Handles undefined route errors

export class notFoundErros extends CustomErrors {
    statusCode = StatusCodes.NOT_FOUND;
    constructor() {
        super('Route not found, check documentation')
        Object.setPrototypeOf(this, notFoundErros.prototype);
    }
    serializeError() { 
        return [{ message: 'Not Found' }];
    }
    
}


