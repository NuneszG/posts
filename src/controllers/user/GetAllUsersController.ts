import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllUsersService } from "../../services/user/GetAllUsersService";

export class GetAllUsersController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const Users = new GetAllUsersService();
        const All = await Users.Execute();

        reply.send(All);
    };
};