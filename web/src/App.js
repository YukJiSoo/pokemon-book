import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import GlobalStyles from "./GlobalStyles";

import client from "./graphql/client";

import PokemonBook from "./container/PokemonBook";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ApolloProvider client={client}>
        <PokemonBook />
      </ApolloProvider>
    </>
  );
};

export default App;
