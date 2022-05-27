import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { UpdateCoffeeDto } from './update-coffee.dto';

@ApiTags('coffees')
export class UpdateBulkCoffeeDto extends UpdateCoffeeDto {
  @ApiProperty({
    description: 'The id of the coffee.<br />咖啡的 ID。',
    example: '62873690d3f83ca1cf641b45',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly id: string;
}
