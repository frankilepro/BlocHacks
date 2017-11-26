import React from "react";
import ReactDOM from "react-dom";
import Form from './components/Form'; 
import form from './form'; 
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Data from "./pages/Data";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Maps from "./pages/Maps";
import RefugeForm from "./pages/RefugeForm"
import CenterForm from "./pages/CenterForm"
import RefugeeProfile from "./pages/RefugeeProfile";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="data" name="data" component={Data}></Route>
      <Route path="maps" name="maps" component={Maps}></Route>
      <Route path="refugeForm" name="refugeForm" component={RefugeForm}></Route>
      <Route path="centerForm" name="centerForm" component={CenterForm}></Route>
      <Route path="refugeeprofile" name="refugeeprofile" component={RefugeeProfile}></Route>
    </Route>
  </Router>,
app);
