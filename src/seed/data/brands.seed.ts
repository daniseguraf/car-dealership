import { Brand } from 'src/brands/entities/brand.entity'
import { v4 as uuid } from 'uuid'

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Chery',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'FORD',
    createdAt: Date.now(),
  },
]
