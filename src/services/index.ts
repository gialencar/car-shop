import { Model } from '../interfaces/ModelInterface';
import IService, { ServiceError } from './interfaces';

export default abstract class Service<T> implements IService<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(entity: T): Promise<T | null | ServiceError> {
    return this.model.create(entity);
  }

  async read(): Promise<T[]> {
    return this.model.read();
  }

  async readOne(id: string): Promise<T | null> {
    return this.model.readOne(id);
  }

  async update(id: string, entity: T): Promise<T | null | ServiceError> {
    return this.model.update(id, entity);
  }

  async delete(id: string): Promise<T | null> {
    return this.model.delete(id);
  }
}
