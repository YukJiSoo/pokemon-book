import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./graphql/client";

import PokemonBook from "./container/PokemonBook";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PokemonBook />
    </ApolloProvider>
  );
};

export default App;
