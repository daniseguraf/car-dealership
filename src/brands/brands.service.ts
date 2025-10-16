import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuidv4 } from 'uuid';


import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
private brands: Brand[]= [


];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto
    const newBrand = { id: uuidv4(), name:name.toLowerCase(), createdAt: Date.now() }

    this.brands.push(newBrand)

    return this.brands.at(-1);
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(({id}) => id === id)

    if (!brand) throw new NotFoundException(`Brand with id ${id} was not found`);

    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(id)

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return ({...brand, name:updateBrandDto.name, updatedAt: Date.now() })
      }

      return brand
    })

    return this.findOne(id);
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id)

  }

  populateBrandsSeedData(brands: Brand[]) {
    this.brands = brands
  }
}
