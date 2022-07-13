import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/custom.error';

export default function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ message: 'internal error' });
}
