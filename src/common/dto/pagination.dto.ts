import { IsPositive, IsNumber, IsOptional, IsInt } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsInt()
  limit: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsInt()
  skip: number;
}
