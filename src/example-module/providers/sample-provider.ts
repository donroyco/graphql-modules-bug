import { Injectable, Scope } from 'graphql-modules';

@Injectable({
    scope: Scope.Operation
})
export class SampleProvider {
    constructor() {
        console.log('SampleProvider: creating instance')
    }

    getProvider() {
       return 'I am a provider';
    }
}
