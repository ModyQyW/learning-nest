import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Delete,
  Post,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiCreatedResponse({
    description: 'Successfully create a coffee. <br />成功创建一个咖啡。',
    type: Coffee,
  })
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Post('/bulk')
  @ApiCreatedResponse({
    description: 'Successfully create bulk coffees. <br />成功创建多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  createBulk(@Body() createCoffeeDtos: CreateCoffeeDto[]) {
    return this.coffeeService.create(createCoffeeDtos);
  }

  /**
   * Update
   */

  @Patch('/bulk')
  @ApiOkResponse({
    description: 'Successfully update bulk coffees. <br />成功更新多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  updateBulk(@Body() updateBulkCoffeeDtos: UpdateBulkCoffeeDto[]) {
    return this.coffeeService.updateBulk(updateBulkCoffeeDtos);
  }

  @Patch('/:id')
  @ApiOkResponse({
    description: 'Successfully update a coffee. <br />成功更新一个咖啡。',
    type: Coffee,
  })
  update(@Param() idDto: IdDto, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(idDto, updateCoffeeDto);
  }

  @Post('/patch/bulk')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Successfully update bulk coffees. <br />成功更新多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  updateBulkWithPost(@Body() updateBulkCoffeeDtos: UpdateBulkCoffeeDto[]) {
    return this.updateBulk(updateBulkCoffeeDtos);
  }

  @Post('/:id/patch')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Successfully update a coffee. <br />成功更新一个咖啡。',
    type: Coffee,
  })
  updateWithPost(@Param() idDto: IdDto, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.update(idDto, updateCoffeeDto);
  }

  /**
   * Delete
   */

  @Delete('/bulk')
  @ApiOkResponse({
    description: 'Successfully delete bulk coffees. <br />成功删除多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  removeBulk(@Body() idsDto: IdsDto) {
    return this.coffeeService.removeBulk(idsDto);
  }

  @Delete('/:id')
  @ApiOkResponse({
    description: 'Successfully delete a coffee. <br />成功删除一个咖啡。',
    type: Coffee,
  })
  remove(@Param() idDto: IdDto) {
    return this.coffeeService.remove(idDto);
  }

  @Post('/delete/bulk')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Successfully delete bulk coffees. <br />成功删除多个咖啡。',
    type: Coffee,
    isArray: true,
  })
  removeBulkWithPost(@Body() idsDto: IdsDto) {
    return this.removeBulk(idsDto);
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Successfully delete a coffee. <br />成功删除一个咖啡。',
    type: Coffee,
  })
  removeWithPost(@Param() idDto: IdDto) {
    return this.remove(idDto);
  }

  /**
   * Other actions
   */
}
