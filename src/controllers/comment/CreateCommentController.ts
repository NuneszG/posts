import { FastifyRequest, FastifyReply } from "fastify";
import { CommentInteger } from "../../utils/comment/CommentInterface";
import { CreateCommnetService } from "../../services/comment/CreateCommentService";

export class CreateCommentController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { post_title } = request.query as CommentInteger;
        const { user_username, content } = request.body as CommentInteger;

        const Comment = new CreateCommnetService();
        const NewComment = await Comment.Execute({ user_username, post_title, content });

        reply.send(NewComment);
    };
};