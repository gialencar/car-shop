import { z } from 'zod';
import { vehicleSchema } from './VehicleInterface';

const MOTORCYCLE_CATEGORIES = ['Street', 'Custom', 'Trail'] as const;

const motorcycleSchema = vehicleSchema.extend({
  category: z.enum(MOTORCYCLE_CATEGORIES),
  engineCapacity: z.number().positive().lte(2500),
});

export type Motorcycle = z.infer<typeof motorcycleSchema>;
