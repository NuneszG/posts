import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../../services/user/UpdateUserService";
import { UserId, UserInteger } from "../../utils/user/UserInterface";

export class UpdateUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;
        const { name, email, password, status, username, bio } = request.body as UserInteger;

        const User = new UpdateUserService();
        const UserUpdated = await User.Execute({ name, email, password, status, username, bio, id });

        reply.send(UserUpdated);
    };
};