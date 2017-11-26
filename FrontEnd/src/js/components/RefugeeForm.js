import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/SimpleInput';
import SelectInput from './inputs/SelectInput';

import { Button, Card, CardText, Textfield } from 'react-mdl';

export default observer(({ form }) => (
    <form onSubmit={form.onSubmit}>
      <h2>Personnal Information</h2>
      <hr/>
        <SimpleInput field={form.$('firstName')} />
        <SimpleInput field={form.$('lastName')} />
        <SimpleInput field={form.$('dateOfBirth')} />
        <SimpleInput field={form.$('contryOfBirth')} />
        <SimpleInput field={form.$('cityOfBirth')} />
        <SimpleInput field={form.$('email')} />
        <SimpleInput field={form.$('phoneNumber')} />
        <SimpleInput field={form.$('languages')} />
      <h2>Current Adress</h2>
      <hr/>
        <SimpleInput field={form.$('adressStreet')} />
        <SimpleInput field={form.$('adressCity')} />
        <SelectInput field={form.$('adressProvince')} />
        <SimpleInput field={form.$('adressZipCode')} />
      <h2>Account Information</h2>
      <hr/>
        <SimpleInput field={form.$('password')} />
        <SimpleInput field={form.$('passwordConfirm')} />
      <br/>
        <button type="submit" type="button" className="btn btn-primary btn-lg" onClick={form.onSubmit}>Submit</button>
      <p>{form.error}</p>
    </form>
));