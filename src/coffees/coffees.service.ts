import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { omit } from 'lodash';
import { IdDto, IdsDto, PaginationDto } from '@/common';
import { Coffee } from './entities';
import { CreateCoffeeDto, UpdateCoffeeDto, UpdateBulkCoffeeDto } from './dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  /**
   * Read
   */

  async findAll(paginationDto: PaginationDto) {
    const { limit, skip } = paginationDto;
    return this.coffeeModel.find().limit(limit).skip(skip).exec();
  }

  async findByIds(idsDto: IdsDto) {
    const { ids } = idsDto;
    const coffees = await this.coffeeModel.find({ _id: { $in: ids } }).exec();
    if (coffees.length !== ids.length) {
      const notFoundIds = ids
        .filter((id) => !coffees.some((coffee) => coffee.id === id))
        .map((id) => `#${id}`);
      throw new NotFoundException(`Coffee ${notFoundIds.join(', ')} not found.`);
    }
    return coffees;
  }

  async findById(idDto: IdDto) {
    const { id } = idDto;
    const coffee = await this.coffeeModel.findById(id).exec();
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  /**
   * Create
   */

  async create(createCoffeeDto: CreateCoffeeDto | CreateCoffeeDto[]) {
    if (Array.isArray(createCoffeeDto)) {
      return this.coffeeModel.insertMany(createCoffeeDto);
    }
    return this.coffeeModel.create(createCoffeeDto);
  }

  /**
   * Update
   */

  async update(idDto: IdDto, updateCoffeeDto: UpdateCoffeeDto) {
    const { id } = idDto;
    const existingCoffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
      .exec();
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return existingCoffee;
  }

  async updateBulk(updateBulkCoffeeDtos: UpdateBulkCoffeeDto[]) {
    const session = await this.connection.startSession();
    const coffees = await session.withTransaction(async () => {
      const updatedCoffees = await Promise.all(
        updateBulkCoffeeDtos.map((updateBulkCoffeeDto) =>
          this.coffeeModel
            .findByIdAndUpdate(
              { _id: updateBulkCoffeeDto.id },
              { $set: omit(UpdateBulkCoffeeDto, 'id') },
              { new: true, session },
            )
            .exec(),
        ),
      );
      if (updatedCoffees.some((item) => !item)) {
        const ids = updatedCoffees
          .map((item, index) => (item ? '' : `#${updateBulkCoffeeDtos[index].id}`))
          .filter(Boolean);
        throw new NotFoundException(`Coffees ${ids.join(',')} not found.`);
      }
    });
    session.endSession();
    return coffees;
  }

  /**
   * Delete
   */

  async remove(idDto: IdDto) {
    const { id } = idDto;
    const removedCoffee = await this.coffeeModel.findOneAndRemove({ _id: id }).exec();
    if (!removedCoffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return removedCoffee;
  }

  /**
   * Other actions
   */
}
