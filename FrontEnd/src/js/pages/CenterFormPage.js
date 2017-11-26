import React from "react";
import form from '../form';

import {Link} from 'react-router';

export default class CenterFormPage extends React.Component {
  render() {
     return (
      <div class="center-background">
      <div class="col-md-3 signInCenterSiders">
        <Link to="/">
          <div className="back">
              <div className="centertext"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back</div>
          </div>
        </Link>
      </div>
      <div class="col-md-6 mg-top-big signUpCenter">
      <p className="signInHeader">Contact us !</p>
      <p className="signInInfo">Call the number below and our team will help you register you Refugee Center.</p>
      <p className="signInInfo"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> 514-846-0005</p>
      </div>
      <div class="col-md-3 signInCenterSiders"></div>
    </div>
     );
  
   }
  
 }
  