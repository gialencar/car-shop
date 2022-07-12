import { Model } from 'mongoose';
import GenericModel from './generic.model';
import { ICar } from './schemas/car.schema';

export default class CarModel extends GenericModel<ICar> {
  constructor(mongooseModel: Model<ICar>) {
    super(mongooseModel);
    this.mongooseModel = mongooseModel;
  }
}
