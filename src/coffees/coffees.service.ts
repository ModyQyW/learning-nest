import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coffee } from './entities';
import type { PaginationDto } from '@/common';
import type { CreateCoffeeDto, UpdateCoffeeDto } from './dto';

@Injectable()
export class CoffeesService {
  constructor(@InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit, skip } = paginationDto;
    return this.coffeeModel.find().limit(limit).skip(skip).exec();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeModel.findById(id).exec();
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeModel.create(createCoffeeDto);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
      .exec();
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return existingCoffee;
  }

  async remove(id: string) {
    const removedCoffee = await this.coffeeModel.findByIdAndRemove({ _id: id }).exec();
    if (!removedCoffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return removedCoffee;
  }
}
