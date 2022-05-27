import { ApiProperty } from '@nestjs/swagger';
import { Min, IsOptional, IsInt, Max } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description:
      'The limit of the query. 0 meaning no limit. Min 0. Max 500. Default 10. Should be a int.<br />查询使用的限制。0 表示没有限制。最小为 0，最大为 500，默认为 10，必须为一个整数。',
    default: 10,
  })
  @IsOptional()
  @Min(0)
  @Max(500)
  @IsInt()
  readonly limit: number = 10;

  @ApiProperty({
    description:
      'The skip/offset of the query. 0 meaning no skip/offset. Min 0. Default 0. Should be a int.<br />查询使用的偏移。0 表示没有偏移。最小为 0，默认为 0，必须为一个整数。',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @IsInt()
  readonly skip: number = 0;
}
