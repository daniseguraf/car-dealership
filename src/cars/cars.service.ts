import { Injectable, NotFoundException } from '@nestjs/common';
import { CarBody } from './cars.controller';
import { Car } from './interfaces/cars.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuidv4(), brand: 'Toyota', model: 'Corolla' },
    { id: uuidv4(), brand: 'BMW', model: 'X5' },
    { id: uuidv4(), brand: 'Ford', model: 'Fiesta' },

  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    console.log('id', id);

    if (!car) throw new NotFoundException(`Car with id ${id} was not found`);

    return car;
  }

  createOne(createCarDto: CreateCarDto) {
    this.cars.push({ ...createCarDto, id: uuidv4() });
    return this.cars.at(-1);
  }

  updateOne(updatedCar: { id: string; body: CarBody }) {
    this.cars = this.cars.map((car) => {
      if (car.id === updatedCar.id) {
        return { ...car, ...updatedCar.body };
      }

      return car;
    });
  }

  deleteOne(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
