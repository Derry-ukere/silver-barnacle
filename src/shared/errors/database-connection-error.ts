import {CustomErrors} from '../errors/CustomErrors';

export class DataBaseConnectionError extends CustomErrors {
    statusCode = 500;
  reason = 'Error connecting to database';


    constructor() {
        super('Unable to connect to database')
        Object.setPrototypeOf(this, DataBaseConnectionError.prototype);

    }
    serializeError(): { message: string; field?: string | undefined; }[] {
        return [{message : this.reason}]
    }
};