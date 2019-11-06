import React, {Component} from 'react';
import Login from '../components/Login/login';
class Form extends Component{
    state={
        loggedin: false
    }
    loggedInHandler=() =>{
        this.setState({loggedin:true});
        console.log('this is working');
        
    }
    render(){
        return(
            <React.Fragment>
                <Login 
                loggedIn = {this.loggedInHandler}
                />
            </React.Fragment>
        )
    }
}
export default Form;