import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";
import { CategoryBody } from "../../utils/category/CategoryInterface";

export class CreateCategoryController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name } = request.body as CategoryBody;

        const NewCategory = new CreateCategoryService();
        const Category = await NewCategory.Execute({ name });

        reply.send(Category);
    };
};