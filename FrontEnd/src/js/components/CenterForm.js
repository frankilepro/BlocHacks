import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/SimpleInput';

export default observer(({ form }) => (
  <div>
    <p>Call this number to register your center</p>
    <p>123 456 7890</p>
  </div>
));