import { FastifyRequest, FastifyReply } from "fastify";
import { UserId } from "../../utils/user/UserInterface";
import { GetSpecificUserService } from "../../services/user/GetSpecificUserService";

export class GetSpecificUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;

        const User = new GetSpecificUserService();
        const UserInfo = await User.Execute({ id });

        reply.send(UserInfo);
    };
};