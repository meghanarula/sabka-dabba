import React, { Component } from 'react';
import cookie from 'react-cookies';
import {
    ToastContainer,
    Toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class Login extends Component {
    constructor(props){
    
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        // if(cookie.load('access_token') !== undefined){
        //     this.props.history.push('/login');
        // }
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

     handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    login = () => {
        debugger;

        let data = {
            email: this.state.email,
            password: this.state.password
        };
        
        fetch("http://192.168.1.31:3001/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res)=>{
            return res.json();
        })    
        .then((res)=>{
            console.log(res);
            if(res.access_token !== undefined){
                cookie.save('access_token', res.access_token);
                cookie.save('role', res.role);
                this.props.history.push("/register");
                this.notify(res.message);
            }else{
                this.notify(res.error.user_authentication[0]);
            }
        })    
        .catch((err)=>{
            console.log("Error while login "+ err);
        })    
    }
    logout=()=>{
        cookie.remove('access_token');
        cookie.remove('role');
        this.props.history.push('/');

    }
     render() {
         return (
            <React.Fragment >
            <div className="body">
                <div className="bg"></div>
                <div className="loginforms">
                
                    <h1>Login Form</h1>
<br/><br/>
                    Email: <input className="Email" type="text" onChange={this.handleEmail}></input> 
<br/>
                    Password: <input type='password' className="Password" 
                    onChange={this.handlePassword}/><br/>
                    <a href="http://">Forgot Password</a> 
                    
<br/>
                    <button className="login" onClick={this.login} >Login</button>
                    <button className="logout" onClick={this.logout} >Logout</button>

               </div>
            </div>
               <ToastContainer />
            </React.Fragment>
             
         );
     }
 }
 
 export default Login;