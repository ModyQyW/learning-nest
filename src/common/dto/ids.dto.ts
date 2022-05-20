import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class IdsDto {
  @ApiProperty({ description: 'The ids for the operation.', example: [] })
  @IsMongoId({ each: true })
  readonly ids: string[];
}
