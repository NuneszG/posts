import { Prisma } from "../../prisma/prisma";
import { UserBody } from "../../utils/user/UserInterface";

export class CreateUserService {
    async Execute({ name, email, password, username, status, bio }: UserBody) {

        if(!name || !email || !password || !username || !bio) {
            throw Error("Requisição inválida. Por favor, tente novamente.");
        }

        const NewUser = await Prisma.user.create({
            data: {
                name,
                email,
                password,
                username,
                status,
                profile: {
                    create: {
                        bio: bio
                    }
                }
            },
            include: {
                profile: true
            }
        });

        return NewUser; 
    }
}