import { FastifyRequest, FastifyReply } from "fastify";
import { GetProfilesService } from "../../services/profile/GetProfilesService";

export class GetProfilesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const Profiles = new GetProfilesService();
        const ShowProfiles = await Profiles.Execute();

        reply.send(ShowProfiles);
    };
};