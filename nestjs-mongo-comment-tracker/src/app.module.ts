import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [MongooseModule.forRoot('<ENTER THE MONGO CLUSTER URL>', {
    autoCreate: true
  }), CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
