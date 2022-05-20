import { IsString } from 'class-validator';

export class IdsDto {
  @IsString({ each: true })
  ids: string[];
}
