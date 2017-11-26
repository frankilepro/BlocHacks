import React from 'react';

import { observer } from 'mobx-react';

export default observer(({ field, type = 'text', placeholder = null }) => (
    
<div className="form-group">
    <label htmlFor={field.id} >{field.label}</label>
    <select {...field.bind({ type }) } class="form-control">
        <option value="" disabled selected>{field.placeholder}</option>
        {field.options.map(element => <option key={element} value={element} >{element}</option>)}
    </select>
</div>
 
));