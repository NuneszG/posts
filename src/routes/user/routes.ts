import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateUserController } from "../../controllers/user/CreateUserController";
import { GetAllUsersController } from "../../controllers/user/GetAllUsersController";
import { UpdateUserController } from "../../controllers/user/UpdateUserController";
import { GetSpecificUserController } from "../../controllers/user/GetSpecificUserController";
import { DeleteUserController } from "../../controllers/user/DeleteUserController";

export default async function RoutesUser(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/users/create-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().Handle(request, reply)
    });

    fastify.put("/auth/users/update-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().Handle(request, reply)
    });

    fastify.get("/auth/users/get-all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllUsersController().Handle(request, reply)
    });

    fastify.get("/auth/users/get-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetSpecificUserController().Handle(request, reply)
    });

    fastify.delete("/auth/users/delete-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().Handle(request, reply)
    });

};