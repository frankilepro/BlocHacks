import React from "react";
import RefugeeForm from '../components/RefugeeForm';
import form from '../form';

export default class refugeform extends React.Component {  
    render() {
      return (
        <div class="col-md-12">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1>Create your Profile</h1>
            <RefugeeForm form={form} />  
          </div>
          <div class="col-md-3"></div>
        </div>
      );
    }
  }