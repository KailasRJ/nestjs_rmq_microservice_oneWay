import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>
    ){}


    async all() : Promise<Post[]> {
        return this.postRepository.find();
    }


    async create(data) : Promise<Post> {
        return this.postRepository.save(data);
    }

    async get(id: number) : Promise<Post> {
         return this.postRepository.findOne({
            where: {
                id
            }
         })
    }

    async update(id: number, data: any) : Promise<any> {
        return this.postRepository.update(id, data)
   }


   async delete(id: number) : Promise<any> {
    return this.postRepository.delete(id)
   }
}
