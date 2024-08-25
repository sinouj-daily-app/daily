import {ApolloClient, ApolloQueryResult, DocumentNode, InMemoryCache} from "@apollo/client";
import {Apollo, Task} from "@daily/shared/models";


export class ApolloService {

    public client: ApolloClient<Apollo> = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache(),
    })

    public async query(CONST_QUERY: DocumentNode) {
        return await this.client.query({query: CONST_QUERY}).then((result: ApolloQueryResult<Task[]>) => result).catch(e => console.log(e))
    }

    public async mutation(CONST_MUTATION: DocumentNode) {
        return await this.client.mutate({mutation: CONST_MUTATION}).then(result => result).catch(e => console.log(e))
    }
}