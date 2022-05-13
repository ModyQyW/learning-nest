import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CatsModule, CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
