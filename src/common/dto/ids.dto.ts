import { IsMongoId } from 'class-validator';

export class IdsDto {
  @IsMongoId({ each: true })
  readonly ids: string[];
}
