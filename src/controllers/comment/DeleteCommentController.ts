import { FastifyRequest, FastifyReply } from "fastify";
import { CommentId } from "../../utils/comment/CommentInterface";
import { DeleteCommentService } from "../../services/comment/DeleteCommentService";

export class DeleteCommentController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as CommentId;

        const Comment = new DeleteCommentService();
        const DeleteComment = await Comment.Execute({ id });

        reply.send(DeleteComment);
    };
};