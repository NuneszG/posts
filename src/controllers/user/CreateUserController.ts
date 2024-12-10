import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserBody } from "../../utils/user/UserInterface";

export class CreateUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email, password, username, status, bio } = request.body as UserBody;
        
        const User = new CreateUserService();
        const NewUser = await User.Execute({ name, email, password, username, status, bio });

        reply.send(NewUser);
    };
};