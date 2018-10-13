import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Topheader extends Component {
    state = {  }
    render() {
        return (
            <div>
                <React.Fragment>
            <Link to="/Login">Log In</Link>
            <Link to="/Register">Register</Link>
         </React.Fragment></div>
            
        );
    }
}

export default Topheader;
