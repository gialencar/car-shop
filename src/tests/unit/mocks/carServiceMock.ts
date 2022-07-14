import { Model } from 'mongoose';
import { ICar } from '../../../models/schemas/car.schema';
import IService from '../../../services/interfaces';
import { validCar } from './carMocks';

export default class CarServiceMock implements IService<ICar> {
  async create(entity: ICar): Promise<ICar | null> {
    return validCar as ICar;
  }

  async read(): Promise<ICar[]> {
    return [validCar] as ICar[];
  }

  async readOne(id: string): Promise<ICar | null> {
    return validCar as ICar;
  }

  async update(id: string, entity: ICar): Promise<ICar | null> {
    return validCar as ICar;
  }

  async delete(id: string): Promise<ICar | null> {
    return validCar as ICar;
  }
}
