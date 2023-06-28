import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentSchema,CommentDocument } from './comment.model';
import { Model } from 'mongoose';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>
    ){}


    async all() : Promise<Comment[]> {
        return this.commentModel.find().exec()
    }

    async create(data: any): Promise<Comment>{

        return new this.commentModel(data).save()

    }
}
