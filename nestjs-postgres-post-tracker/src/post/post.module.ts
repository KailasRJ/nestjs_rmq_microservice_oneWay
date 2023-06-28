import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[TypeOrmModule.forFeature([Post]),
  ClientsModule.register([
    {
      name: 'POST_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['<ENTER THE RABBIT MQ URL>'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),

],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
