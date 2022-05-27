import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.<br />咖啡的名称。', example: 'name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string = '';

  @ApiProperty({ description: 'The brand of a coffee.<br />咖啡的品牌。', example: 'brand' })
  @IsNotEmpty()
  @IsString({})
  readonly brand: string = '';

  @ApiProperty({ description: 'The flavors of a coffee.<br />咖啡的口味。', example: ['vanilla'] })
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  readonly flavors: string[] = [];
}
