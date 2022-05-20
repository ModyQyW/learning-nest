import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsMongoId } from 'class-validator';

export class IdsDto {
  @ApiProperty({ description: 'The ids for the operation.', example: ['62873690d3f83ca1cf641b45'] })
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsMongoId({ each: true })
  readonly ids: string[];
}
