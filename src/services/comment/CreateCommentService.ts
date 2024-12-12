import { Prisma } from "../../prisma/prisma";
import { CommentInteger } from "../../utils/comment/CommentInterface";

export class CreateCommnetService {
    async Execute({ user_username, post_title, content }: CommentInteger) {

        const NewPost = await Prisma.comment.create({
            data: {
                user_username,
                post_title,
                content
            }
        });

        return NewPost;
    };
};