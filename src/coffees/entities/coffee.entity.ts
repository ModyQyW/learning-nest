import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  toJSON: {
    transform: (_, returnDocument) => {
      returnDocument.id = returnDocument._id;
      delete returnDocument._id;
      delete returnDocument.__v;
    },
  },
  toObject: {
    transform: (_, returnDocument) => {
      returnDocument.id = returnDocument._id;
      delete returnDocument._id;
      delete returnDocument.__v;
    },
  },
})
export class Coffee extends Document {
  @ApiProperty({ description: 'The name of a coffee.<br />咖啡的名称。', example: 'name' })
  @Prop(String)
  name: string;

  @ApiProperty({ description: 'The brand of a coffee.<br />咖啡的品牌。', example: 'brand' })
  @Prop(String)
  brand: string;

  @ApiProperty({ description: 'The flavors of a coffee.<br />咖啡的口味。', example: ['vanilla'] })
  @Prop([String])
  flavors: string[];
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
