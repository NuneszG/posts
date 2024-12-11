import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllPostsService } from "../../services/post/GetAllPostsService";

export class GetAllPostsController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const Posts = new GetAllPostsService();
        const AllPosts = await Posts.Execute();

        reply.send(AllPosts);
    };
};