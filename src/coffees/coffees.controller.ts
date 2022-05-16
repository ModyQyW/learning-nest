import { Controller, Get, Param, Patch, Body, Delete, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';
import type { PaginationDto } from '@/common';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.coffeeService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Post(':id/patch')
  updateWithPost(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }

  @Post(':id/delete')
  removeWithPost(@Param('id') id: string) {
    return this.remove(id);
  }
}
