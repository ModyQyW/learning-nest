import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { CoffeesModule } from './coffees';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      expandVariables: true,
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        MODE: Joi.string()
          .valid('development', 'staging', 'production', 'test')
          .default('development'),
      }),
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_CONNECTION_STRING ?? 'mongodb://root:root@0.0.0.0',
      }),
    }),
    CoffeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
