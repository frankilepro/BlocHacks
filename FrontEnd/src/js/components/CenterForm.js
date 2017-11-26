import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/SimpleInput';

export default observer(({ form }) => (
    <form onSubmit={form.onSubmit}>
      <SimpleInput field={form.$('firstName')} />
      <SimpleInput field={form.$('lastName')} />
      <SimpleInput field={form.$('email')} />
      <SimpleInput field={form.$('password')} />
      <SimpleInput field={form.$('passwordConfirm')} />
      <br/>
        <button type="submit" type="button" className="btn btn-primary btn-lg" onClick={form.onSubmit}>Submit</button>
      <p>{form.error}</p>
    </form>
));