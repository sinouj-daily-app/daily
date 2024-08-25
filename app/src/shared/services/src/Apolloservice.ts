import {ApolloClient, DocumentNode, InMemoryCache} from "@apollo/client";


export class ApolloService {

    public client: ApolloClient<any> = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache(),
    })

    public query(CONST_QUERY: DocumentNode) {
        this.client.query({query: CONST_QUERY}).then(result => result).catch(e => console.log(e))
    }

    public mutation(CONST_MUTATION: DocumentNode) {
        this.client.mutate({mutation: CONST_MUTATION}).then(result => result).catch(e => console.log(e))
    }
}