import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Data from "./pages/Data";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Maps from "./pages/Maps";
import RefugeFormPage from "./pages/RefugeeFormPage"
import CenterFormPage from "./pages/CenterFormPage"
import RefugeeProfile from "./pages/RefugeeProfile";
import CenterProfile from "./pages/CenterProfile";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="data" name="data" component={Data}></Route>
      <Route path="maps" name="maps" component={Maps}></Route>
      <Route path="refugeFormPage" name="refugeFormPage" component={RefugeFormPage}></Route>
      <Route path="centerFormPage" name="centerFormPage" component={CenterFormPage}></Route>
      <Route path="refugeeprofile" name="refugeeprofile" component={RefugeeProfile}></Route>
      <Route path="centerprofile" name="centerprofile" component={CenterProfile}></Route>
    </Route>
  </Router>,
app);
