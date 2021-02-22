import React from 'react'


    /*
            In functional components you will always get the props in the function parameter (whatever you name it)
         */

    /*
        props = {
          className: "myClass"
           manish: "Hey footer",
           anotherTitle: "Trademark" 
           cindy: true 
           children: '<h1>OMG, I'm Lost</h1>'
        }
    */
   const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
      </div>
    );
  };
  

export default FormField