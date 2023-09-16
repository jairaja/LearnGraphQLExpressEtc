import ApolloClient from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { IndexRoute, Route, Router, hashHistory } from "react-router";

import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongsList";
import SongDetails from "./components/SongDetails";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/song/:id" component={SongDetails} />
        </Route>
      </Router>
      {/* <div>
        <SongList />
      </div> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
