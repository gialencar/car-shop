import { Router } from 'express';
import CarController from '../controllers/car.controller';
import validateCar from '../middlewares/validateCar';
import CarModel from '../models/car.model';
import { CarMongooseModel } from '../models/schemas/car.schema';
import CarService from '../services/car.service';

const carRouter = Router();

const carModel = new CarModel(CarMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter
  .post('/cars', (req, res, next) => {
    carController.create(req, res, next);
  })
  .get('/cars/:id', (req, res, next) => {
    carController.readOne(req, res, next);
  })
  .get('/cars', (req, res, next) => {
    carController.read(req, res, next);
  })
  .put(
    '/cars/:id',
    (req, res, next) => {
      validateCar(req, res, next);
    },
    (req, res, next) => {
      carController.update(req, res, next);
    },
  )
  .delete('/cars/:id', (req, res, next) => {
    carController.delete(req, res, next);
  });

export default carRouter;
