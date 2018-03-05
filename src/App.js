import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  state = {
    fields:{},
    contacts: [{}]
  };


  componentDidMount() {
    axios.get( `/api/contacts` )
    .then( response => {
      this.setState({ contacts: response.data });
    });
  }

  updateParent(){
    axios.get( `/api/contacts` )
    .then( response => {
      this.setState({ contacts: response.data });
    });
  }


  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
      // fields: Object.assign({}, this.state.fields, updatedValue)
    });
  };


  render() {
    return (
      <div className="App">

        <Header />  
        
        <Form onChange={fields => this.onChange(fields)} onUpdate={()=>this.updateParent()} />
        
       <div className="contactWrapper"> 
        {
          this.state.contacts.map(contact => {
            return (
              <div key={contact.id} className="contactItem">
              <Contact contact={contact} onUpdate={()=>this.updateParent()}/>
              </div>
            )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
