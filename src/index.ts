import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { exampleApp } from './app';

const schema = exampleApp.createSchemaForApollo();

const server = new ApolloServer({ schema } as any);

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
