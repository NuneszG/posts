import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { SearchProfileController } from "../../controllers/profile/SearchProfileController";

export default async function RoutesProfile(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.get("/auth/profile/search-profile/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new SearchProfileController().Handle(request, reply);
    })
};