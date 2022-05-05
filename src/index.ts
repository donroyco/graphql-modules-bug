import 'reflect-metadata';

import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { exampleApp } from './app';

const schema = exampleApp.createSchemaForApollo();

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    } as ApolloServerExpressConfig);
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 6543 }));
    console.log(`🚀 Server ready at http://localhost:6543${server.graphqlPath}`);
}

startApolloServer();
