import { carSchema } from '../interfaces/CarInterface';
import { Model } from '../interfaces/ModelInterface';
import { ICar } from '../models/schemas/car.schema';
import IService, { ServiceError } from './interfaces';

export default class CarService implements IService<ICar> {
  #carModel: Model<ICar>;

  constructor(carModel: Model<ICar>) {
    this.#carModel = carModel;
  }

  async create(entity: ICar): Promise<ICar | null | ServiceError> {
    const parsed = carSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.#carModel.create(entity);
  }

  async read(): Promise<ICar[]> {
    return this.#carModel.read();
  }

  async readOne(id: string): Promise<ICar | null> {
    return this.#carModel.readOne(id);
  }

  async update(id: string, entity: ICar): Promise<ICar | null | ServiceError> {
    const parsed = carSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.#carModel.update(id, entity);
  }

  async delete(id: string): Promise<ICar | null> {
    return this.#carModel.delete(id);
  }
}
