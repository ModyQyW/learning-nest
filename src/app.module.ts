import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CoffeesModule } from './coffees';
import Config from './config';

const envFilePathMap: Record<string, string[]> = {
  development: ['.env'],
  staging: ['.env'],
  production: ['.env'],
  test: ['.env.test', '.env'],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: envFilePathMap[process.env.NODE_ENV || 'development'],
      expandVariables: true,
      isGlobal: true,
      load: [Config],
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
