import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/car.controller';
import CarServiceMock from '../mocks/carServiceMock';
import { NextFunction, Request, Response } from 'express';
import { validCar } from '../mocks/carMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('car controller', () => {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({} as NextFunction);

  before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  describe('create car', () => {
    before(() => {
      req.body = validCar;
    });

    it('success case', async () => {
      const carModelMock = new CarServiceMock();
      const carController = new CarController(carModelMock);

      await carController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(validCar)).to.be.true;
    });
  });

  describe('get all cars', () => {
    it('success case', async () => {
      const carModelMock = new CarServiceMock();
      const carController = new CarController(carModelMock);

      await carController.read(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([validCar])).to.be.true;
    });
  });

  describe('get one car', () => {
    it('success case', async () => {
      const carModelMock = new CarServiceMock();
      const carController = new CarController(carModelMock);

      await carController.readOne(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(validCar)).to.be.true;
    });
  });

  describe('update car', () => {
    before(() => {
      
    })
    it('success case', async () => {
      const carModelMock = new CarServiceMock();
      const carController = new CarController(carModelMock);

      await carController.update(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(validCar)).to.be.true;
    });
  });
});
