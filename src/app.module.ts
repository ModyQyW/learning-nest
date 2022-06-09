import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CoffeesModule } from './coffees';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      expandVariables: true,
      isGlobal: true,
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
