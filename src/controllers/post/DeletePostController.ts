import { FastifyRequest, FastifyReply } from "fastify";
import { PostId } from "../../utils/post/PostInterface";
import { DeletePostService } from "../../services/post/DeletePostService";

export class DeletePostController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as PostId;

        const Post = new DeletePostService();
        const PostDeleted = await Post.Execute({ id });

        reply.send(PostDeleted);
    };
};