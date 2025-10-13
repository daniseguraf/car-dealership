import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

export type CarBody = { brand: string; model: string };

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createOne(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: string, @Body() body: CarBody) {
    console.log(id, body);
    this.carsService.updateOne({ id, body });
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: string) {
    this.carsService.deleteOne(id);
  }
}
