import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./graphql/client";

const App = () => {
  return <ApolloProvider client={client}></ApolloProvider>;
};

export default App;
