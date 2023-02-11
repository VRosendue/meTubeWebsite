import React from "react";
import {Modal, Button, FormGroup, FormControl, ModalFooter, FormLabel} from 'react-bootstrap';
import axios from "axios";
import { onLogin } from "./auth.api";
import './Login.css';
import Signup from "../Signup/Signup";









//process.env.REACT_APP_API_URL_VIDEO;
//process.env.REACT_APP_API_URL_USER;


const apiUrl = process.env.REACT_APP_API_URL_USER as string;


//Keycloak authorization
//Firebase

interface AppProps {
    show: boolean;
    onHide: () => void;
    
}

interface AppState {
    email: string;
    password: string;
    show: boolean;
    signupModalOpen: boolean;
    
  }



class LoginModal extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        
        super(props);
        this.state = {
            email: '',
            password: '',
            show: false,
            signupModalOpen: false
            
        };
    }


    
    openSignupModal = () => {
        this.setState({ signupModalOpen: true });
    }

    closeSignupModal = () => {
        this.setState({ signupModalOpen: false});
    }


    

    login = async (event: React.FormEvent) => {
        event.preventDefault();
        const {email, password} = this.state;
        const response = await onLogin({
            email,
            password
        });
     }

    


    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({email: event.target.value });
    }

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value });
    }

    //REACT_APP_API_URL_VIDEO = 'http://178.62.212.197/api/video/'
    //REACT_APP_API_URL_USER = 'http://178.62.212.197/api/user/'

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
         //apiUrl + "login"
        fetch(apiUrl + "login", {
        method: "POST",
        //mode: "no-cors",
        headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             email: this.state.email,
             password: this.state.password
         })
     })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

        // try {
        //     const response = await axios.post('http://178.62.212.197/api/user', {
        //         email: this.state.email,
        //         password: this.state.password,
        //     });
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    render() {
        return (
        <div>
            <div className={`overlay ${this.props.show ? 'visible' : 'hidden'}`}></div>
        <Modal show={true} onHide={this.props.onHide} className="center-modal">
            <Modal.Header>
             <Modal.Title>Login</Modal.Title>
             </Modal.Header>
               <Modal.Body>
                {!this.state.signupModalOpen ? (
                 <form onSubmit={this.handleSubmit}>
                     <FormGroup>
                         <FormLabel>Email</FormLabel>
                         <FormControl type="email" onChange={this.handleEmailChange} value={this.state.email}/>
                     </FormGroup>
                     <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
                     </FormGroup>
                    <Button type="submit">Login</Button>
                    
                 </form>
                
                 ) : (
              <Signup />
            )}
            <p>
              Don't have an account? <a href="#" onClick={() => this.openSignupModal()}>Sign-up</a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.props.onHide}> Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;