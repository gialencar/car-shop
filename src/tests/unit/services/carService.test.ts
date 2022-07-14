import { expect } from 'chai';
import mongoose from 'mongoose';

import CarModel from '../../../models/car.model';
import { ICar } from '../../../models/schemas/car.schema';
import CarService from '../../../services/car.service';
import { validCar } from '../mocks/carMocks';
import carModelMock from '../mocks/carModelMock';

describe('car service', () => {
  const carMock = validCar as ICar;

  describe('create car', () => {
    it('success case', async () => {
      const carService = new CarService(new carModelMock());

      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMock);
    });
  });

  describe('Get all cars', () => {
    it('Success', async () => {
      const carService = new CarService(new carModelMock());

      const cars = await carService.read();
      expect(cars).to.be.deep.equal([carMock]);
    });
  });
});
