import { Prisma } from "../../prisma/prisma";
import { PostId } from "../../utils/post/PostInterface";

export class DeletePostService {
    async Execute({ id }: PostId) {

        const Post = await Prisma.post.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.post.delete({
            where: {
                id: Post?.id
            }
        });

        return `A postagem ${Post?.title}, foi deletada.`;
    };
};