import React from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import { render } from "react-dom";


const apiUrl = process.env.REACT_APP_API_URL_USER as string;

interface State {
    firstName: string;
    userName: string;
    password: string; 
    email: string; 
    lastName: string;
    show: boolean;
  }

    




class Signup extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: '',
            userName: '',
            password: '',
            email: '',
            lastName: '',
            show: false,
        };
    }
//firstname, username, password, email, lastname

    handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({firstName: event.target.value});
    }

    handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({userName: event.target.value});
    }

    
    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value });
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({email: event.target.value });
    }


    handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({lastName: event.target.value});
    }


    createUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.firstName, this.state.userName, this.state.password, this.state.email, this.state.lastName);
        //http://178.62.212.197/api/user/userItem
        //http://178.62.212.197/api/user/userItem
        fetch(apiUrl, {
        method: "POST",
        //mode: "no-cors",
        headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
            firstName: this.state.firstName,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            lastName: this.state.lastName
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    };

//firstname, username, password, email, lastname

    render() {
        return (
            <form onSubmit={this.createUser}>
                <FormGroup>
                    <FormLabel>First Name: </FormLabel>
                    <FormControl type="name" onChange={this.handleFirstNameChange} value={this.state.firstName} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Last Name: </FormLabel>
                    <FormControl type="lastname" onChange={this.handleLastNameChange} value={this.state.lastName} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email: </FormLabel>
                    <FormControl type="email" onChange={this.handleEmailChange} value={this.state.email} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Username: </FormLabel>
                    <FormControl type="username" onChange={this.handleUserNameChange} value={this.state.userName} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password: </FormLabel>
                    <FormControl type="password" onChange={this.handlePasswordChange} value={this.state.password} />
                </FormGroup>



                <Button type="submit">Create User</Button>

            </form>

        )
    }
}
        

export default Signup;
