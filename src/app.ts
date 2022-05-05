import { createApplication } from 'graphql-modules';
import { exampleModule } from './example-module';

export const exampleApp = createApplication({
    modules: [exampleModule],
})
