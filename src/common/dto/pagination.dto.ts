import { Min, IsOptional, IsInt } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Min(0)
  @IsInt()
  readonly limit: number = 0;

  @IsOptional()
  @Min(0)
  @IsInt()
  readonly skip: number = 0;
}
