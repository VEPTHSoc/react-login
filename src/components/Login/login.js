import React from 'react';
import './login.css';
const login =(props)=>{
    return(
        <React.Fragment>
        <input type="text" className="textField" placeholder="enter email"></input>
        <input type="password" className="textField" placeholder="enter password"></input>
            <button className="login_button" onClick={props.loggedIn}>login</button>
            </React.Fragment>
    )   
}

export default login;