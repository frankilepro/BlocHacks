import MyForm from 'mobx-react-form';

import validatorjs from 'validatorjs';
const plugins = { dvr: validatorjs };


const fields = [
{
  name: 'adressZipCode',
  label: 'Zip Code',
  placeholder: 'ex : H3H 2S2',
  rules: 'required|string',
},
{
  name: 'adressCity',
  label: 'City',
  placeholder: 'ex : Montréal',
  rules: 'required|string',
},
{
  name: 'adressProvince',
  label: 'Province',
  options: ['Québec', 'Ontario', 'British Colombia', 'Alberta',
   'Nova Scotia', 'Terre-Neuve-et-Labrador', 'Saskatchewan', 'Manitoba', 'Nouveau Brunswick', 'Ile du Prince Edouard' ],
  placeholder: 'Select a Province',
  rules: 'required|string',
},
{
  name: 'adressStreet',
  label: 'Street adress',
  placeholder: 'ex : 1610 rue Sainte-Catherine ouest',
  rules: 'required|string',
},
{
  name: 'dateOfBirth',
  label: 'Birthday',
  placeholder: 'ex : 1980-12-20',
  rules: 'required|string',
},  
{
  name: 'cityOfBirth',
  label: 'City of Birth',
  placeholder: 'ex : Damascus',
  rules: 'required|string',
},  
{
  name: 'contryOfBirth',
  label: 'Contry of Birth',
  placeholder: 'ex : Syrie',
  rules: 'required|string',
},
{
  name: 'languages',
  label: 'Languages Spoken',
  placeholder: 'ex : English',
  rules: 'required|string',
},
{
  name: 'phoneNumber',
  label: 'Phone Number',
  placeholder: 'ex : (123) 456-7890',
  rules: 'string',
},
{
 name: 'firstName',
 label: 'First Name',
 placeholder: 'ex : Jean',
 rules: 'required|string',
},
{
 name: 'lastName',
 label: 'Last Name',
 placeholder: 'ex : Tremblay',
 rules: 'required|string',
},
{
 name: 'email',
 label: 'Email',
 placeholder: 'ex : my@email.com',
 rules: 'email|string|between:5,40',
}, 
{
 name: 'password',
 label: 'Password',
 placeholder: 'Insert Password',
 rules: 'required|string|between:5,25',
},
{
 name: 'passwordConfirm',
 label: 'Password Confirmation',
 placeholder: 'Confirm Password',
 rules: 'required|string|same:password',
}];

const hooks = {

 onSuccess(form) {
   alert('Informations are valid!');
   // get field values



   let refugee = {
    firstName:form.values().firstName,
    secondName:form.values().lastName,
    languages:form.values().languages,
    contryOfBirth: form.values().contryOfBirth,
    cityOfBirth: form.values().cityOfBirth,
    dateOfBirth: form.values().dateOfBirth
   }
   console.log(refugee);
   let API_URL_REFUGEE = "https://teamguenonwebapi.azurewebsites.net/api/refugeeset";
   var settings = {
       "async": true,
       "crossDomain": true,
       "url": API_URL_REFUGEE,
       "method": "POST",
       "headers": {
       "content-type": "application/json"
       },
       "data": JSON.stringify(refugee)
   }

   $.ajax(settings).done(function (response) {
       console.log(response);
       let API_URL_EMAIL = "https://teamguenonwebapi.azurewebsites.net/api/emailset";
       let API_URL_ADDRESS = "https://teamguenonwebapi.azurewebsites.net/api/addressset";
       let API_URL_PHONE = "https://teamguenonwebapi.azurewebsites.net/api/phoneset";
    
       console.log(response.refugeeId);
    
       settings = {
        "url": API_URL_EMAIL,
        "headers": {
        "content-type": "application/json"
        },
        method:"POST",
        "data": JSON.stringify({
        emailAddress:form.values().email,
        refugeeId:response.refugeeId
      })
       }
       $.ajax(settings).done(function (response) {
           console.log(response);
       });
       settings = {
        "url": API_URL_ADDRESS,
        "headers": {
        "content-type": "application/json"
        },
        method:"POST",
        "data": JSON.stringify({
          addressFullName:form.values().adressStreet + " " + form.values().adressCity,
          refugeeId:response.refugeeId
        })
       }
       $.ajax(settings).done(function (response) {
           console.log(response);
       });
       console.log(form.values().phoneNumber);
       settings = {
        "url": API_URL_PHONE,
        "headers": {
        "content-type": "application/json"
        },
        method:"POST",
        "data": JSON.stringify({
          phoneNumber:form.values().phoneNumber,
          refugeeId:response.refugeeId
        })
       }
       $.ajax(settings).done(function (response) {
           console.log(response);
       });
       console.log('Form Values!', form.values());
       window.location.href="#/signinrefugee";
   });
   
 },

 onError(form) {
   alert('Form has errors!');
   // get all form errors
   console.log('All form errors', form.errors());
 }
}

export default new MyForm({ fields }, { plugins, hooks });