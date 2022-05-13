import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateCoffeeDto, UpdateCoffeeDto } from './dto';
import type { Coffee } from './entities';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'test',
      brand: 'test',
      flavors: ['vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = {
      id: +`${Date.now()}${(Math.random() * 1000).toFixed(0)}`,
      ...createCoffeeDto,
    };
    this.coffees.push(coffee);
    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    Object.assign(existingCoffee, updateCoffeeDto);
    return existingCoffee;
  }

  remove(id: number) {
    const index = this.coffees.findIndex((item) => item.id === id);
    if (index < 0) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return this.coffees.splice(index, 1);
  }
}
