import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/Streams/new" exact component={StreamCreate} />
            <Route path="/Streams/:id" exact component={StreamShow} />
            <Route path="/Streams/edit/:id" exact component={StreamEdit} />
            <Route path="/Streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
