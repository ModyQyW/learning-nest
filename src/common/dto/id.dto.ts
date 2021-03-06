import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class IdDto {
  @ApiProperty({
    description: 'The id for the operation.<br />操作使用的 ID。',
    example: '62873690d3f83ca1cf641b45',
  })
  @IsMongoId()
  readonly id: string;
}
