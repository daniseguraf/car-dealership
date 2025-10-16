import { Injectable, NotFoundException } from '@nestjs/common'
import { Car } from './interfaces/car.interfaces'
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto'
import { CARS_SEED } from 'src/seed/data/cars.seed'

@Injectable()
export class CarsService {
  private cars: Car[] = []

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id)

    if (!car) throw new NotFoundException(`Car with id ${id} was not found`)

    return car
  }

  createOne(createCarDto: CreateCarDto) {
    this.cars.push({ ...createCarDto, id: uuid() })
    return this.cars.at(-1)
  }

  updateOne(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id)

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto }
        return carDB
      }

      return car
    })

    return carDB
  }

  deleteOne(id: string) {
    this.findOneById(id)
    this.cars = this.cars.filter((car) => car.id !== id)

    return this.cars
  }

  populateCarsSeedData(cars: Car[]) {
    this.cars = cars
  }
}
