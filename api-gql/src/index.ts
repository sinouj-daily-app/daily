import {ApolloServer} from "@apollo/server";
import sequelize from "./server/database";
import express from "express";
import {expressMiddleware} from "@apollo/server/express4";
import cors from "cors";
import {resolvers} from "./resolvers";
import {getSchemaFiles, readSchema} from "./server/utils";

const app = express();
const port = process.env.PORT || 4000;

const typeDefs = getSchemaFiles("src/schemas").map(file => {
    return readSchema(file);
});

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    // await sequelize.sync({force: true});
    const server = new ApolloServer({typeDefs, resolvers});
    await server.start().then(() => {
        console.log(`🚀 Apollo Server ready`);
    });

    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server));
});
