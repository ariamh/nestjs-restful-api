import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemController } from './items/item.controller';
import { AppService } from './app.service';
import { ItemService } from './items/item.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ItemSchema } from './items/item.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ariamustofa:fgBFaKSTcOVDHrCF@cluster0.01qwlka.mongodb.net/'),
    MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])
  ],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
