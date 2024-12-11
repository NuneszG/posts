import { Prisma } from "../../prisma/prisma";

export class GetAllPostsService {
    async Execute() {

        const Posts = await Prisma.post.findMany({
            include: {
                author: true,
                category: true
            }
        });

        return Posts;
    };
};