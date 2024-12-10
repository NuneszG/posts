import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { GetAllCategoriesController } from "../../controllers/category/GetAllCategoriesController";
import { GetPostsController } from "../../controllers/category/GetPostsController";
import { UpdateCategoryController } from "../../controllers/category/UpdateCategoryController";

export default async function RoutesCategory(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/categories/create-category/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCategoryController().Handle(request, reply)
    });

    fastify.get("/auth/categories/all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllCategoriesController().Handle(request, reply);
    });

    fastify.get("/auth/categories/posts/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetPostsController().Handle(request, reply);
    });

    fastify.put("/auth/categories/update-category/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCategoryController().Handle(request, reply);
    });

};