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
  options: ['Montréal', 'Laval'],
  placeholder: 'ex : Montréal',
  rules: 'required|string',
},
{
  name: 'adressProvince',
  label: 'Province',
  options: ['Quebec', 'Ontario'],
  placeholder: 'ex : Quebec',
  rules: 'required|string',
},
{
  name: 'adressStreet',
  label: 'Street adress',
  placeholder: 'ex : 1610 rue Sainte-Catherine ouest',
  rules: 'required|string',
},
{
  name: 'centre',
  label: 'Center',
  placeholder: 'ex : Centre de la nature',
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
   alert('Form is valid! Send the request here.');
   // get field values
   console.log('Form Values!', form.values());
 },

 onError(form) {
   alert('Form has errors!');
   // get all form errors
   console.log('All form errors', form.errors());
 }
}

export default new MyForm({ fields }, { plugins, hooks });