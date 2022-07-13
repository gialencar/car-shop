import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/custom.error';

export default function validateCar(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    if (id.length < 24) {
      throw new CustomError('Id must have 24 hexadecimal characters', 400);
    }

    if (Object.keys(req.body).length === 0) {
      throw new CustomError('Requisition body must not be empty', 400);
    }

    next();
  } catch (error) {
    next(error);
  }
}
