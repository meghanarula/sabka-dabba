import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router';


ReactDOM.render(<App />,
    <Router > 
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>  
    </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
