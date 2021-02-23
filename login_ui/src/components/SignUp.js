import React, {Component} from 'react'
import { connect } from 'react-redux'
import {createUser} from '../redux/action/actions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios';



class SignUp extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            username:'',
            email:'',
            password: '',
            avatar:'',
            message:'',
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


    handleAvatar = (event) => {
        return this.setState({avatar: event.target.files[0]})
    }

    handleReset = () =>{
        this.setState({ email:'', username: '', password: '', avatar: ''})
    }

    handleAvatarUpload = async(file) =>{
        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset', 'avatar');
        const repsone = await axios({
            url: 'cloud apu url',
            method: 'POST',
            data: formData,
        })
        return repsone.data.secure_url;
    }


    handleSubmit = async(event) =>{
        event.preventDefault()
        const {username, email, password} = this.state
        let{avatar} = this.state
        const{newUser, user} = this.props
        const imgPath = await this.handleAvatarUpload(avatar)
        avatar = imgPath;
        await newUser({username,email,password,avatar})
        if(user.isLogin ===true){
            const {history} = this.props;
            history.push('/')
        }else{
            this.setState({
                message: 'Welcome to your page!'
            })
        }
        this.handleReset()
    }


    render(){
        const {message} = this.state
        return(
            <div>
                
                <h3>Sign Up</h3>

                <form onsubmit={this.handleSubmit} className='sign_up_form'>
                 <h3>{message}</h3>
                    <div>
                        <label htmlFor='email'>
                            E-mail:
                        </label>
                        <input type ='email' value={this.state.email} onChange={this.handleEmail} required/>
                    </div>
                    <div>
                        <label htmlFor='username'>
                            Username:
                        </label>
                        <input type='text' value={this.state.username} onChange={this.handleUsername} required/>
                    </div>
                    <div>
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input type='password' value={this.state.password} onChange={this.handlePassword} required/>
                    </div>
                    <div>
                        <label htmlFor='avatar'>
                            Avatar:
                        </label>
                        <input type='file' accept="/images/*" onChange={this.handleAvatar} />
                    </div>
                    <div>
                        <button type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }


    
}

const mapStateToProps = state =>({
    user: state.user
})

const mapDispatchToProps = dispatch =>({
    newUser: user => dispatch(createUser(user)),
})

SignUp.propTypes = {
    newUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
	history: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);