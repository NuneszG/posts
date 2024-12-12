import { Prisma } from "../../prisma/prisma";
import { CommentBody } from "../../utils/comment/CommentInterface";

export class UpdateCommentService {
    async Execute({ id, content }: CommentBody) {

        const Comment = await Prisma.comment.findFirst({
            where: {
                id: id
            }
        });

        const CommentUpdated = await Prisma.comment.update({
            where: {
                id: Comment?.id
            },
            data: {
                content
            }
        });

        return CommentUpdated;
    };
};