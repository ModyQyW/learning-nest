import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CoffeesModule } from './coffees';

@Module({
  imports: [
    CoffeesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://root:mongodb@0.0.0.0:27017,0.0.0.0:27018,0.0.0.0:27019/db?authSource=admin&replicaSet=replicaset',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
