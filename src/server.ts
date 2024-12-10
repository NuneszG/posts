import { fastify } from "fastify";
import cors from "@fastify/cors";

import RoutesUser from "./routes/user/routes";
import RoutesCategory from "./routes/category/routes";
import RoutesProfile from "./routes/profile/routes";
import RoutesPost from "./routes/post/routes";

const App = fastify({
    logger: true
});

const Start = async () => {

    await App.register(cors);

    await App.register(RoutesUser);
    await App.register(RoutesCategory);
    await App.register(RoutesProfile);
    await App.register(RoutesPost);

    try {
        await App.listen({ port: 8000 });
    } catch (err) {
        process.exit(1);
    };
};

Start();