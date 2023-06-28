import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommentDocument = Comment & Document

@Schema()
export class Comment {

    @Prop()
    post_id: number

    @Prop()
    commented_user_id: number

    @Prop()
    comment: string

}

export const CommentSchema = SchemaFactory.createForClass(Comment)