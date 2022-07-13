import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/custom.error';
import { Car } from '../interfaces/CarInterface';
import IService from '../services/interfaces';
import ICarController from './interfaces/car.controller';

export default class CarController implements ICarController {
  #carService: IService<Car>;

  constructor(carService: IService<Car>) {
    this.#carService = carService;
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
      const carObj = { model, year, color, buyValue, seatsQty, doorsQty };

      const car = await this.#carService.create(carObj);
      if (!car) throw new Error();
      if ('error' in car) {
        return res.status(400).json({ error: car.error.issues });
      }
      return res.status(201).json(car);
    } catch (err) {
      next(err);
    }
  }

  async read(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void | Response> {
    const cars = await this.#carService.read();

    return res.status(200).json(cars);
  }

  async readOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      if (id.length !== 24) {
        throw new CustomError('Id must have 24 hexadecimal characters', 400);
      }

      const car = await this.#carService.readOne(id);
      if (!car) {
        throw new CustomError('Object not found', 404);
      }

      return res.status(200).json(car);
    } catch (err) {
      next(err);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    throw new Error('Method not implemented.');
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    throw new Error('Method not implemented.');
  }
}
