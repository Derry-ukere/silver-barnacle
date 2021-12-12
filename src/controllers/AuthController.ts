import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import UserDao from "@daos/User/UserDao.mock";
import { paramMissingError } from "@shared/constants";
import { AuthService } from "../services/AuthService";
import {handleRouteError} from '../handlers/errors/handleRoutesError'

const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export const AuthController = {
  /**
   * Get all users.
   *
   * @param req
   * @param res
   * @returns
   */
  async register(req: Request, res: Response) {
    try {
      const status = AuthService.createUser();
      res.status(201).json(status)
    } catch (error) {
        handleRouteError(req,res)
    }
  },

  /**
   * Login users.
   *
   * @param req
   * @param res
   * @returns
   */
  async login(req: Request, res: Response) {
    res.send("login user");
  },

  /**
   *Log out users
   *
   * @param req
   * @param res
   * @returns
   */

  async logout(req: Request, res: Response) {
    res.send("logoutusers");
  },
};