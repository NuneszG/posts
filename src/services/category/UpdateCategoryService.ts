import { Prisma } from "../../prisma/prisma";
import { CategoryInteger } from "../../utils/category/CategoryInterface";

export class UpdateCategoryService {
    async Execute({ id, name }: CategoryInteger) {

        const Category = await Prisma.category.findFirst({
            where: {
                id: id
            }
        });

        const CategoryUpdated = await Prisma.category.update({
            where: {
                id: Category?.id
            },
            data: {
                name: name
            }
        });

        return CategoryUpdated;
    };
};