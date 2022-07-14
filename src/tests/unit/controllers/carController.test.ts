import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/car.controller';
import CarServiceMock from '../mocks/carServiceMock';
import { NextFunction, Request, Response } from 'express';
import { validCar } from '../mocks/carMocks';
import validateCar from '../../../middlewares/validateCar';
import { ICar } from '../../../models/schemas/car.schema';

chai.use(chaiHttp);

const { expect } = chai;

describe('car controller', () => {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({} as NextFunction);
  const responseCar = validCar as ICar;

  before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.params = { id: '62cef79b12eb767b7b44df50' };
  });

  describe('create car', () => {
    before(() => {
      req.body = validCar;
    });

    it('success case', async () => {
      const carServiceMock = new CarServiceMock();
      const carController = new CarController(carServiceMock);

      await carController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(responseCar)).to.be.true;
    });
  });

  describe('get all cars', () => {
    it('success case', async () => {
      const carServiceMock = new CarServiceMock();
      const carController = new CarController(carServiceMock);

      await carController.read(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([responseCar])).to.be.true;
    });
  });

  describe('get one car', () => {
    it('success case', async () => {
      const carServiceMock = new CarServiceMock();
      const carController = new CarController(carServiceMock);

      await carController.readOne(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(responseCar)).to.be.true;
    });

    // describe('fail case', () => {
    //   before(() => {
    //     req
    //   })
    //   it('should trow error if id length < 24', async () => {
    //     const carServiceMock = new CarServiceMock();
    //     const carController = new CarController(carServiceMock);

    //     await carController.readOne(req, res, next);
    //   });
    // });
  });

  describe('update car', () => {
    before(() => {});
    it('success case', async () => {
      const carServiceMock = new CarServiceMock();
      const carController = new CarController(carServiceMock);

      await carController.update(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(responseCar)).to.be.true;
    });
  });

  describe('delete car', () => {
    it('success case', async () => {
      const carServiceMock = new CarServiceMock();
      const carController = new CarController(carServiceMock);

      await carController.delete(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});
