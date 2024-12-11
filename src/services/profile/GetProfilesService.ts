import { Prisma } from "../../prisma/prisma";

export class GetProfilesService {
    async Execute() {

        const Profiles = await Prisma.profile.findMany({
            include: {
                user: true
            }
        });

        return Profiles;
    };
};