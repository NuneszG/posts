import { Prisma } from "../../prisma/prisma";
import { CommentId } from "../../utils/comment/CommentInterface";

export class DeleteCommentService {
    async Execute({ id }: CommentId) {

        const Comment = await Prisma.comment.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.comment.delete({
            where: {
                id: Comment?.id
            }
        });

        return `Comentario da conta ${Comment?.user_username} foi deletado.`;
    };
};