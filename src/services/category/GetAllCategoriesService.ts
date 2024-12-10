import { Prisma } from "../../prisma/prisma";

export class GetAllCategoriesService {
    async Execute() {

        const All = await Prisma.category.findMany();

        return All;
    };
};