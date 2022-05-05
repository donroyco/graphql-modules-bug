import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { createModule } from 'graphql-modules';
import { SampleProvider } from './providers/sample-provider';
import Mutation from './resolvers/mutation';

export const exampleModule = createModule({
    id: 'exampleModule',
    providers: [SampleProvider],
    resolvers: [Mutation],
    typeDefs: mergeTypeDefs(loadFilesSync(`${__dirname}/schema`)),
})
