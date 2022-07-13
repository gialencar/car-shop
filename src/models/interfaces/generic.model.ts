export default interface IGenericModel<T> {
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T | null>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}