import StatusCodes from "http-status-codes";
import { Request, Response } from "express";

import UserDao from "@daos/User/UserDao.mock";
import { paramMissingError } from "@shared/constants";

const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export const UserController = {
  /**
   * Get all users.
   *
   * @param req
   * @param res
   * @returns
   */
  async getAllUsers(req: Request, res: Response) {
    res.send("fetch all users");
  },

  /**
   * Add one user.
   *
   * @param req
   * @param res
   * @returns
   */

  async addOneUser(req: Request, res: Response) {
    res.send("add one user");
  },

  /**
   * Update one user.
   *
   * @param req
   * @param res
   * @returns
   */
  async updateOneUser(req: Request, res: Response) {
    res.send("update user");
  },

  /**
   * Delete one user.
   *
   * @param req
   * @param res
   * @returns
   */
  async deleteOneUser(req: Request, res: Response) {
    res.send("delete one user");
  },
};
