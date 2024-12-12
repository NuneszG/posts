import { FastifyRequest, FastifyReply } from "fastify";
import { CommentBody } from "../../utils/comment/CommentInterface";
import { UpdateCommentService } from "../../services/comment/UpdateCommentService";

export class UpdateCommentController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as CommentBody;
        const { content } = request.body as CommentBody;

        const Comment = new UpdateCommentService();
        const UpdateComment = await Comment.Execute({ id, content });

        reply.send(UpdateComment);
    };
};