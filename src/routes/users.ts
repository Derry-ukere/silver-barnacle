import { Router } from 'express';
import { UserController} from '../controllers/UsersController';


// User-route
const userRouter = Router();
userRouter.get('/all', UserController.getAllUsers);
userRouter.put('/update', UserController.updateOneUser);
userRouter.delete('/delete/:id', UserController.deleteOneUser);


// Export the base-router
export default userRouter;
