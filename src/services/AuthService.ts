import {} from 'typeorm';
import {userDto} from '../interfaces/Iuser';

export const AuthService = {
    async createUser (){
        return {
            status: 'created'
        }
    }
}