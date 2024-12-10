import { Prisma } from "../../prisma/prisma";
import { Userkeys } from "../../utils/user/UserInterface";

export class SearchProfileService {
    async Execute({ name }: Userkeys) {

        const Search = await Prisma.user.findFirst({
            where: {
                name: name
            },
            include: {
                profile: true,
                posts: true
            }
        });

        return Search;
    };
};