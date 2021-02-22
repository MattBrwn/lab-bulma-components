import React from 'react';
import FormField from './formfield/FormField.js'
import Navbar from './navbar/Navbar.js'

class App extends React.Component {
  render(){
      return (
          <React.Fragment>
              <Navbar title="Navbar" />
              <FormField title = "FormField" />
          </React.Fragment>
      )
  }
}

export default App;
