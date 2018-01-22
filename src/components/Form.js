import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
    constructor(){
        super()

    this.state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    };
}


    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        // make axios post call to server 
        // with new user information
        // console.log("this.state", this.state)
        axios.post('/api/contacts', this.state)
        .then((response) => {
            console.log(response.data);
            this.props.onUpdate();
        })

        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        });
        this.props.onChange({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        })
    }



    render(){
        console.log("render state", this.state)
        return(
            <form className="personalInfo">
                <input 
                name="firstName"
                placeholder='First name' 
                value={this.state.firstName} 
                onChange={e => this.change(e)}/>

                <br />

                <input placeholder='Last name'
                name="lastName" 
                value={this.state.lastName} 
                onChange={e => this.change(e)}/>

                <br />  

                <input placeholder='User name'
                name="userName" 
                value={this.state.userName} 
                onChange={e => this.change(e)}/>

            <br />

                <input placeholder='Email'
                name="email" 
                value={this.state.email} 
                onChange={e => this.change(e)}/>

                <br />

                <input placeholder='Password'
                name="password"
                type="password" 
                value={this.state.password} 
                onChange={e => this.change(e)}/>

                <br />

                <button className="submit"
                onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}





export default Form;