import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('posts')
export class PostController {
    constructor(
        private PostService: PostService,
        @Inject('POST_SERVICE') private readonly client: ClientProxy
        ){}

    @Get()
    getAll() {
        return this.PostService.all()
    }

    @Post()
    async create(
    @Body('user_id') user_id: string,
    @Body('post_content') post_content: string 
    ) {

        const post =  await this.PostService.create({user_id, post_content})

        return post
    }

    @Post('comment')
    async createComment(
    @Body() data: any,
    ) {

        this.client.emit('comment_created', data)
        return data
    }

    @Get(':id')
    async get(@Param('id') id: number ){
        return this.PostService.get(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body('title') title: string,@Body('image') image: string ) {
        return this.PostService.update(id, {title, image})
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.PostService.delete(id)
    }

}
