import React from 'react';

import { observer } from 'mobx-react';

export default observer(({ field, type = 'text', placeholder = null }) => (

 <div className="form-group">

   <label htmlFor={field.id} >{field.label}</label>

   <input {...field.bind({ type, placeholder }) } className="form-control"/>

   <small>{field.error}</small>

 </div>
 
));