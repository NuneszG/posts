import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../../services/user/DeleteUserService";
import { ProfileId } from "../../utils/profile/ProfileInterface";

export class DeleteUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as ProfileId;

        const Profile = new DeleteUserService();
        const ProfileDeleted = await Profile.Execute({ id });

        reply.send(ProfileDeleted);
    };
};