import {ApolloServer} from "@apollo/server";
import sequelize from "./server/database";
import express from "express";
import {expressMiddleware} from "@apollo/server/express4";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

const typeDefs =
`
    type Query {
    hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

    sequelize.sync().then(async () => {
        const server = new ApolloServer({typeDefs, resolvers});
        await server.start().then(() => {
            console.log(`🚀 Server ready`);
        });
        app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server));
    }).catch(error => console.log(error));
});
