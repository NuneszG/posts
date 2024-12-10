import { Prisma } from "../../prisma/prisma";
import { UserId } from "../../utils/user/UserInterface";

export class GetSpecificUserService {
    async Execute({ id }: UserId) {

        const User = await Prisma.user.findUnique({
            include: {
                posts: true,
                profile: true
            },
            where: {
                id: id
            }
        });

        return User;
    };
};