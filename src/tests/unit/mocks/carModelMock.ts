import { Car } from '../../../interfaces/CarInterface';
import GenericModel from '../../../models/generic.model';
import IGenericModel from '../../../models/interfaces/generic.model';
import { validCar } from './carMocks';

export default class carModelMock extends GenericModel<Car> {
  create = async (_entity: Car): Promise<Car> => {
    return validCar;
  }
  read = async (): Promise<Car[]> => {
    return [];
  }
  readOne = async (id: string): Promise<Car | null> => {
    return null;
  }
  update = async (id: string, entity: Car): Promise<Car | null> => {
    return entity;
  }
  delete = async (id: string): Promise<Car | null> => {
    return null;
  }
}
