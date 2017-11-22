import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Data from "./pages/Data";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Maps from "./pages/Maps";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="data" name="data" component={Data}></Route>
      <Route path="maps" name="maps" component={Maps}></Route>
    </Route>
  </Router>,
app);
