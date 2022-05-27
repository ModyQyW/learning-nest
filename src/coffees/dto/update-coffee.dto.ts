import { ApiTags, PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

@ApiTags('coffees')
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
