import { Prisma } from "../../prisma/prisma";
import { PostInteger } from "../../utils/post/PostInterface";

export class UpdatePostService {
    async Execute({ id, title, content, published }: PostInteger) {

        const Post = await Prisma.post.findFirst({
            where: {
                id: id
            }
        });

        const PostUpdated = await Prisma.post.update({
            where: {
                id: Post?.id
            },
            data: {
                title,
                content,
                published
            }
        });

        return PostUpdated;
    };
};