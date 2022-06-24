import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rok1941dvr01yy3wz08cx1/master',
    cache: new InMemoryCache()
})