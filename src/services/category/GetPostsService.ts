import { Prisma } from "../../prisma/prisma";
import { CategoryId } from "../../utils/category/CategoryInterface";

export class GetPostsService {
    async Execute({ id }: CategoryId) {

        const Posts = await Prisma.category.findFirst({
            where: {
                id: id
            },
            include: {
                posts: true
            }
        });

        return Posts;
    };
};