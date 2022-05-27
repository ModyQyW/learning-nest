import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesModule } from './coffees';

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://0.0.0.0:27018,0.0.0.0:27019,0.0.0.0:27020/db?replicaSet=rs',
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
