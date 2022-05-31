import { Controller, Get, Param, Patch, Body, Delete, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IdDto, IdsDto, PaginationDto } from '@/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, UpdateCoffeeDto, UpdateBulkCoffeeDto } from './dto';
import { Coffee } from './entities';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  /**
   * Read
   */

  @Get()
  @ApiOkResponse({
    description: 'Successfully fetch bulk coffees. <br />成功获取多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.coffeeService.findAll(paginationDto);
  }

  @Get('/bulk')
  @ApiOkResponse({
    description: 'Successfully fetch specific coffees. <br />成功获取指定的多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  findByIds(@Query() idsDto: IdsDto) {
    return this.coffeeService.findByIds(idsDto);
  }

  @Get('/:id')
  @ApiOkResponse({
    description: 'Successfully fetch a coffee. <br />成功获取一个咖啡。',
    type: Coffee,
  })
  findById(@Param() idDto: IdDto) {
    return this.coffeeService.findById(idDto);
  }

  /**
   * Create
   */

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Post('/bulk')
  createBulk(@Body() createCoffeeDtos: CreateCoffeeDto[]) {
    return this.coffeeService.create(createCoffeeDtos);
  }

  /**
   * Update
   */

  @Patch('/bulk')
  updateBulk(@Body() updateBulkCoffeeDtos: UpdateBulkCoffeeDto[]) {
    return this.coffeeService.updateBulk(updateBulkCoffeeDtos);
  }

  @Patch('/:id')
  update(@Param() idDto: IdDto, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(idDto, updateCoffeeDto);
  }

  @Post('/patch/bulk')
  updateBulkWithPost(@Body() updateBulkCoffeeDtos: UpdateBulkCoffeeDto[]) {
    return this.updateBulk(updateBulkCoffeeDtos);
  }

  @Post('/:id/patch')
  updateWithPost(@Param() idDto: IdDto, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.update(idDto, updateCoffeeDto);
  }

  /**
   * Delete
   */

  @Delete('/bulk')
  removeBulk(@Body() idsDto: IdsDto) {
    return this.coffeeService.removeBulk(idsDto);
  }

  @Delete('/:id')
  remove(@Param() idDto: IdDto) {
    return this.coffeeService.remove(idDto);
  }

  @Post('/delete/bulk')
  removeBulkWithPost(@Body() idsDto: IdsDto) {
    return this.removeBulk(idsDto);
  }

  @Post('/:id/delete')
  removeWithPost(@Param() idDto: IdDto) {
    return this.remove(idDto);
  }

  /**
   * Other actions
   */
}
