import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateCommentController } from "../../controllers/comment/CreateCommentController";
import { DeleteCommentController } from "../../controllers/comment/DeleteCommentController";

export default async function RoutesComment(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/comment/create-comments/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCommentController().Handle(request, reply)
    });

    fastify.delete("/auth/comment/delete-comment/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCommentController().Handle(request, reply)
    });

};