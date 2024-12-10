import { Prisma } from "../../prisma/prisma";
import { PostBody } from "../../utils/post/PostInterface";

export class CreatePostService {
    async Execute({ title, content, published, id, id_category }: PostBody) {

        if(!title || !content) {
            throw Error("Seu post precisa de um titulo ou um conteudo, reveja sua requisição novamente.");
        }

        const NewPost = await Prisma.post.create({
            data: {
                title, 
                content,
                published,
                category: {
                    connect: {
                        id: id_category
                    }
                },
                author: {
                    connect: {
                        id: id
                    }
                }
            }
        });

        return NewPost;
    };
};