import { MutationResolvers } from '../../generated/graphql';
import { SampleProvider } from '../providers/sample-provider';

const Mutation: MutationResolvers = {
    mutationOne(_, __, { injector }) {
        const provider = injector.get(SampleProvider).getProvider();
        return `mutationOne PROVIDER: ${provider}`
    },
    mutationTwo(_, __, { injector }) {
        const provider = injector.get(SampleProvider).getProvider();
        return `mutationTwo PROVIDER: ${provider}`
    }
}

export default {
    ...Mutation
}
