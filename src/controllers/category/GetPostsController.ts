import { FastifyRequest,FastifyReply } from "fastify";
import { CategoryId } from "../../utils/category/CategoryInterface";
import { GetPostsService } from "../../services/category/GetPostsService";

export class GetPostsController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as CategoryId;
        
        const Posts = new GetPostsService();
        const PostsCategory = await Posts.Execute({ id });

        reply.send(PostsCategory);
    };
};