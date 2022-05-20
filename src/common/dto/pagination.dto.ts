import { IsPositive, IsOptional, IsInt } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  limit: number;

  @IsOptional()
  @IsPositive()
  @IsInt()
  skip: number;
}
