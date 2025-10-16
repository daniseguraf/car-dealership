import { Car } from 'src/cars/interfaces/car.interfaces'
import { v4 as uuid } from 'uuid'

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'BMW', model: 'X5' },
  { id: uuid(), brand: 'Ford', model: 'Fiesta' },
  { id: uuid(), brand: 'Honda', model: 'Civc' },
]
