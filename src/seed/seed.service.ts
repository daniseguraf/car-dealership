import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  populateDB() {

    // populateBrandsSeedData
    // populateCarsSeedData

    return BRANDS_SEED;
  }


}
