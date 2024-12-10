import { FastifyRequest, FastifyReply } from "fastify";
import { Userkeys } from "../../utils/user/UserInterface";
import { SearchProfileService } from "../../services/profile/SearchProfileService";

export class SearchProfileController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name } = request.query as Userkeys;
        
        const Search = new SearchProfileService();
        const SearchProfile = await Search.Execute({ name });

        reply.send(SearchProfile);
    };
};