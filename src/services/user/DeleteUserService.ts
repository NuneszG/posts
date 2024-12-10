import { Prisma } from "../../prisma/prisma";
import { ProfileId } from "../../utils/profile/ProfileInterface";

export class DeleteUserService {
    async Execute({ id }: ProfileId) {

        const ProfileUser = await Prisma.profile.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.profile.delete({
            where: {
                id: ProfileUser?.id
            }
        });

        return `Esse perfil e todos seus dados, foram deletados.`;
    };
};