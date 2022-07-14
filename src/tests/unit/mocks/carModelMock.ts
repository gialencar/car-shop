import { Car } from '../../../interfaces/CarInterface';
import GenericModel from '../../../models/generic.model';
import IGenericModel from '../../../models/interfaces/generic.model';
import { ICar } from '../../../models/schemas/car.schema';
import { validCar } from './carMocks';

export default class carModelMock implements IGenericModel<ICar> {
  create = async (_entity: ICar): Promise<ICar> => {
    return validCar as ICar;
  };
  read = async (): Promise<ICar[]> => {
    return [validCar as ICar];
  };
  readOne = async (id: string): Promise<ICar | null> => {
    return validCar as ICar;
  };
  update = async (id: string, entity: ICar): Promise<ICar | null> => {
    return validCar as ICar;
  };
  delete = async (id: string): Promise<ICar | null> => {
    return validCar as ICar;
  };
}
