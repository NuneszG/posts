import { Prisma } from "../../prisma/prisma";
import { UserInteger } from "../../utils/user/UserInterface";

export class UpdateUserService {
    async Execute({ name, email, password, status, username, bio, id }: UserInteger) {

        const User = await Prisma.user.findFirst({
            where: {
                id: id
            }
        });

        const UserUpdated = await Prisma.user.update({
            where: {
                id: User?.id
            },
            data: {
                name,
                email,
                username,
                password,
                status,
                profile: {
                    update: {
                        data: {
                            bio: bio
                        }
                    }
                }
            }
        });

        return UserUpdated;
    };
};