import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarModel from '../models/car.model';
import { CarMongooseModel } from '../models/schemas/car.schema';
import CarService from '../services/car.service';

const carRouter = Router();

const carModel = new CarModel(CarMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res, next) => {
  carController.create(req, res, next);
});

export default carRouter;
