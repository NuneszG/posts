import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateCommentController } from "../../controllers/comment/CreateCommentController";
import { DeleteCommentController } from "../../controllers/comment/DeleteCommentController";
import { UpdateCommentController } from "../../controllers/comment/UpdateCommentController";

export default async function RoutesComment(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/comment/create-comments/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCommentController().Handle(request, reply)
    });

    fastify.delete("/auth/comment/delete-comment/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCommentController().Handle(request, reply)
    });

    fastify.put("/auth/comment/update-comment/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCommentController().Handle(request, reply)
    });

};