import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePostService } from "../../services/post/CreatePostService";
import { PostBody } from "../../utils/post/PostInterface";

export class CreatePostController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id_category } = request.query as PostBody
        const { title, content, published, id } = request.body as PostBody;

        const NewPost = new CreatePostService();
        const Post = await NewPost.Execute({ title, content, published, id, id_category });

        reply.send(Post);
    };
};