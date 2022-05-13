import { Controller, Get, Param, Patch, Body, Delete, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(+id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Post(':id/patch')
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @Post(':id/delete')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coffeeService.remove(+id);
  }
}
