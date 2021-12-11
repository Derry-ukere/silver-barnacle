import { Router } from 'express';
import { AuthController } from '../controllers/Auth';

const authRouter = Router();


//auth route
authRouter.post('/login', AuthController.login);
authRouter.post('/logout', AuthController.logout);
authRouter.post('/register', AuthController.register);


// Export the base-router
export default authRouter;
