import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { SearchProfileController } from "../../controllers/profile/SearchProfileController";
import { GetProfilesController } from "../../controllers/profile/GetProfilesController";

export default async function RoutesProfile(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.get("/auth/profile/search-profile/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new SearchProfileController().Handle(request, reply);
    });

    fastify.get("/auth/profile/get-profiles/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetProfilesController().Handle(request, reply);
    });
};