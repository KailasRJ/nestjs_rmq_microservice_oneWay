import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('comments')
export class CommentController {
    constructor(
        private commentService: CommentService
    ){}


    @Get()
    async all() {
        return this.commentService.all()
    }

    @EventPattern('comment_created')
    async createComment(comment: any) {

        await this.commentService.create({
            post_id: comment.post_id,
            commented_user_id: comment.commented_user_id,
            comment: comment.comment,
        })

    }
}
