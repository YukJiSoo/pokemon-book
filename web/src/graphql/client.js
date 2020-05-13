import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3030",
  cache: new InMemoryCache(),
});

export default client;
