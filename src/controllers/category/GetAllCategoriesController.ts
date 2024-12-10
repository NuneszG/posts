import { FastifyRequest,FastifyReply } from "fastify";
import { GetAllCategoriesService } from "../../services/category/GetAllCategoriesService";

export class GetAllCategoriesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const All = new GetAllCategoriesService();
        const AllCategories = await All.Execute();

        reply.send(AllCategories);
    };
};