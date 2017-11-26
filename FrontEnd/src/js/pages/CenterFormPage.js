import React from "react";
import CenterForm from '../components/CenterForm';
import form from '../form';

export default class CenterFormPage extends React.Component {
  render() {
     return (
      <div class="col-md-12">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Create your Profileeee</h1>
        <CenterForm form={form} />  
      </div>
      <div class="col-md-3"></div>
    </div>
     );
  
   }
  
 }
  