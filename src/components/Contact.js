import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component{
    constructor(props){
        super(props)

        this.state=props;
        console.log(props)

    }

    put(id) {
        axios.put(`/api/contacts/${id}`, this.state.contact)
          .then(response => {
              console.log(response)
            this.setState({
              contacts: response.data,
            })
          })
      }

  delete(id){
     
      axios.delete(`/api/contacts/${id}`).then(response=>{
          this.setState({
              contacts: response.data
          })
          this.props.onUpdate();
          console.log('delete')
      })

  }
  onUpdateFirstName (value){
    let contact = Object.assign({}, this.state.contact);

    contact.firstName = value;
    this.setState({contact:contact});
  }

  onUpdateLastName (value){
    let contact = Object.assign({}, this.state.contact);

    contact.lastName = value;
    this.setState({contact:contact});
  }

  onUpdateUserName (value){
    let contact = Object.assign({}, this.state.contact);

    contact.userName = value;
    this.setState({contact:contact});
  }

  onUpdateEmail (value){
    let contact = Object.assign({}, this.state.contact);

    contact.email = value;
    this.setState({contact:contact});
  }


render(){
    return (

<div className="contact">
                
                <input className="firstName" 
                    value={ this.state.contact.firstName} 
                    onChange={(e) => {this.onUpdateFirstName(e.target.value)}}/>
                    
                    < br />

                <input className="lastName" 
                    value={ this.state.contact.lastName} 
                    onChange={(e) => {this.onUpdateLastName(e.target.value)}}/>

                < br />         

                <input className="userName" 
                    placeholder={ this.state.contact.userName} 
                    onChange={(e) => {this.onUpdateUserName(e.target.value)}}/>
                
                < br />

                <input className="email" 
                    placeholder={ this.state.contact.email} 
                    onChange={(e) => {this.onUpdateEmail(e.target.value)}}/>

                < br />

                <button className="update"
                onClick={() => this.put(this.state.contact.id)}>Update</button> 
                <button className="delete"
                onClick={() => this.delete(this.state.contact.id)}>Delete</button> 

              </div>

    )

}
}
export default Contact;