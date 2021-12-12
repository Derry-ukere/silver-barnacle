import logger from "@shared/Logger";
import { Request, Response, NextFunction } from "express";
import { CustomErrors } from "../shared/errors/CustomErrors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomErrors) {
    logger.err(err, true);
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }
  logger.err(err, true);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
