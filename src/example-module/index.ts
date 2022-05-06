import { createModule, gql } from 'graphql-modules';
import { SampleProvider } from './providers/sample-provider';

export const exampleModule = createModule({
    id: 'exampleModule',
    providers: [SampleProvider],
    resolvers: {
        Query: {
            hello: () => 'world',
        },
        Mutation: {
            mutationOne(_, __, { injector }) {
                const provider = injector.get(SampleProvider).getProvider();
                return `mutationOne PROVIDER: ${provider}`
            },
            mutationTwo(_, __, { injector }) {
                const provider = injector.get(SampleProvider).getProvider();
                return `mutationTwo PROVIDER: ${provider}`
            }
        }
    },
    typeDefs: [
        gql`
            type Query {
                hello: String!
            }

            type Mutation {
                mutationOne: String
                mutationTwo: String
            }
        `
    ],
})
