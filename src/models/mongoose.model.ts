import { Document, isValidObjectId, Model } from 'mongoose';
import { Model as IGenericModel } from '../interfaces/ModelInterface';

export default abstract class MongooseModel<T> implements IGenericModel<T> {
  protected mongooseModel: Model<T & Document>;

  constructor(mongooseModel: Model<T & Document>) {
    this.mongooseModel = mongooseModel;
  }

  async read(): Promise<T[]> {
    return this.mongooseModel.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.mongooseModel.findOne({ _id: id });
  }

  async create(entity: T): Promise<T> {
    return this.mongooseModel.create(entity);
  }

  async update(id: string, entity: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.mongooseModel.findOneAndUpdate({ _id: id }, entity, {
      returnDocument: 'after',
    });
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.mongooseModel.findOneAndDelete(
      { _id: id },
      { returnDocument: 'before' },
    );
  }
}
