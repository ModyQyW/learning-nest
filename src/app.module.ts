import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesModule } from './coffees';

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot(
      'mongodb://root:mongodb@localhost:27017,localhost:27018,localhost:27019/db?authSource=admin&replicaSet=replicaset',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
