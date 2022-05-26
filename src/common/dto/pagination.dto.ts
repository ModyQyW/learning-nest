import { ApiProperty } from '@nestjs/swagger';
import { Min, IsOptional, IsInt } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description:
      'The limit of the query. Default 0 meaning no limit.<br />查询使用的限制。默认为 0 表示没有限制。',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @IsInt()
  readonly limit: number = 0;

  @ApiProperty({
    description:
      'The skip/offset of the query. Default 0 meaning no skip/offset.<br />查询使用的偏移。默认为 0 表示没有偏移。',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @IsInt()
  readonly skip: number = 0;
}
