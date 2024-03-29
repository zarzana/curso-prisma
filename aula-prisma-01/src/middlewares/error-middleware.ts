import { Request, Response } from "express";
import httpStatus from "http-status";

import { ApplicationError } from "../protocols/post-protocol";


export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response
) {

  console.log(err)
  if (err.name === "ConflictError") {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === "BadRequestError") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}