import { FastifyRequest,FastifyReply } from "fastify";
import { CategoryInteger } from "../../utils/category/CategoryInterface";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

export class UpdateCategoryController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as CategoryInteger;
        const { name } = request.body as CategoryInteger;

        const Category = new UpdateCategoryService();
        const CategoryUpdated = await Category.Execute({ id, name });

        reply.send(CategoryUpdated);
    };
};