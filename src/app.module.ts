import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesModule } from './coffees';

@Module({
  imports: [CoffeesModule, MongooseModule.forRoot('mongodb://localhost:27017/db')],
  controllers: [],
  providers: [],
})
export class AppModule {}
