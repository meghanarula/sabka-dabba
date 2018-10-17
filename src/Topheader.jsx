import React, { Component } from 'react';
import './Topheader.css';
import {Link} from 'react-router-dom';

class Topheader extends Component {
    constructor(){
        super();
    }
   
    render() {
        return (
            <div className='Topheader' >
                <div>
                   <Link className="Login" to="/Login">Login</Link>
                </div>  
                <div>
                   <Link className="Register" to="/Register">Register</Link> 
                </div>
            </div>  
        );
    }
}

export default Topheader;
