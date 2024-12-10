import { FastifyRequest, FastifyReply } from "fastify";
import { PostInteger } from "../../utils/post/PostInterface";
import { UpdatePostService } from "../../services/post/UpdatePostService";

export class UpdatePostController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as PostInteger;
        const { title, content, published } = request.body as PostInteger;

        const Post = new UpdatePostService();
        const PostUpdated = await Post.Execute({ id, title, content, published });

        reply.send(PostUpdated);
    };
};