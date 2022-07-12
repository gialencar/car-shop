import { Model } from 'mongoose';
import MongooseModel from './mongoose.model';
import { ICar } from './schemas/car.schema';

export default class CarModel extends MongooseModel<ICar> {
  constructor(mongooseModel: Model<ICar>) {
    super(mongooseModel);
    this.mongooseModel = mongooseModel;
  }
}
