import React, {Component} from 'react'


export default class SignUp extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            username = '',
            email = '',
            password = '',
            avatar = '',
        }

    }

    handleUsername = (event) => {
        return this.setState({username: event.target.value})
    }
    
    handleEmail = (event) => {
        return this.setState({email: event.target.value})
    }

    handlePassword = (event) => {
        return this.setState({password: event.target.value})
    }


    handlePassword = (event) => {
        return this.setState({avatar: event.target.files[0]})
    }


    render(){
        return(
            
        )
    }


    
}