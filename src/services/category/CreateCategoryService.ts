import { Prisma } from "../../prisma/prisma";
import { CategoryBody } from "../../utils/category/CategoryInterface";

export class CreateCategoryService {
    async Execute({ name }: CategoryBody) {

        const NewCategory = await Prisma.category.create({
            data: {
                name
            }
        });

        return `A categoria ${NewCategory.name} acabou de ser criada!`;
    };
};