import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export default function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ZodError) {
    console.log('--*-*-*-*-*-*-*-*-*-*-*-*-*-*-', err);
  }

  return res.status(500).json({ message: 'internal error' });
}
