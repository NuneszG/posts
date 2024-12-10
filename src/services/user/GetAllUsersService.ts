import { Prisma } from "../../prisma/prisma";

export class GetAllUsersService {
    async Execute() {

        const All = await Prisma.user.findMany();

        return All;
    };
};