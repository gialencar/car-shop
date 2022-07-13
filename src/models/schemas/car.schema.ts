import { Document, model, Schema } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

export interface ICar extends Car, Document {}

const carMongooseSchema = new Schema<ICar>({
  status: { type: Boolean, required: false },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

export const CarMongooseModel = model<ICar>('Car', carMongooseSchema);
