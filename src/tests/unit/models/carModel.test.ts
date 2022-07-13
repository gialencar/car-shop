import { expect } from 'chai';
import mongoose, { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/car.model';
import { CarMongooseModel, ICar } from '../../../models/schemas/car.schema';
import { validCar } from '../mocks/carMocks';

describe('Movie model', () => {
  const carResponse = validCar as ICar;
  describe('create movie', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(validCar);
    });
    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('success case', async () => {
      const carModel = new CarModel(CarMongooseModel);

      const createdCar = await carModel.create(carResponse);

      expect(createdCar).to.deep.eq(validCar);
    });
  });

  describe('get all movies', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves([validCar]);
    });
    after(() => {
      (Model.find as SinonStub).restore();
    });

    it('success case', async () => {
      const carModel = new CarModel(CarMongooseModel);

      const foundCars = await carModel.read();

      expect(foundCars).to.deep.eq([validCar]);
    });
  });

  describe('get one movie', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(validCar);
    });
    after(() => {
      (Model.findOne as SinonStub).restore();
    });

    it('success case', async () => {
      const carModel = new CarModel(CarMongooseModel);

      const foundCar = await carModel.readOne('62cef79b12eb767b7b44df50');

      expect(foundCar).to.deep.eq(validCar);
    });
  });
});
