import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreatePostController } from "../../controllers/post/CreatePostController";
import { UpdatePostController } from "../../controllers/post/UpdatePostController";
import { DeletePostController } from "../../controllers/post/DeletePostController";
import { GetAllPostsController } from "../../controllers/post/GetAllPostsController";

export default async function RoutesPost(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/posts/create-posts/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePostController().Handle(request, reply)
    });

    fastify.put("/auth/posts/update-post/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdatePostController().Handle(request, reply)
    });

    fastify.delete("/auth/posts/delete-post/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletePostController().Handle(request, reply)
    });

    fastify.get("/auth/posts/all-posts/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllPostsController().Handle(request, reply)
    });

};