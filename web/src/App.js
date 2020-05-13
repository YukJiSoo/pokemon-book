import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import GlobalStyles from "./GlobalStyles";

import client from "./graphql/client";

import PokemonBook from "./container/PokemonBook";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <PokemonBook />
      </ApolloProvider>
    </>
  );
};

export default App;
