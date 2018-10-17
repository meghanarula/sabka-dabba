import React, { Component } from 'react';
import "./register.css";

 class Register extends Component {
constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        password:''
        
    };
}
// componentDidMount(){
//     registerUrl:'http://192.168.1.31:3001/auth/register'

// }
     render() {
         return (
             <React.Fragment >
                <div className="body">
                    <div className="bgimage"></div>
                    <div className="registerform">
                    <div className="registertext">Register Here </div>
                    <div> Enter Name<input></input>       
                    Enter Mobile Number<input></input>  <br></br>                 
                    Enter Email<input></input>               
                    choose location
                    <select>
                        <option>jalandhar</option>
                        <option>hushiarpur</option>
                        <option>phagwara</option>
                        <option>kapurthala</option>
                    </select>                
                    <p>DELIVERY LOCATION FOR:</p><input type="radio" />Lunch
                    <input type="radio" />Dinner<br></br>
                    <button className="registerbutton">Register</button>
                    </div>
                    </div>
                </div>
                
               
             </React.Fragment>
             
         );
     }
 }
 
 export default Register;