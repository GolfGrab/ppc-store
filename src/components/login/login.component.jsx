import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './login.styles.scss'
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.util';


export default class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }


  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({[name]:value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div className='log-in'>
        <h2>I already have an account</h2>
        <span>Log in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}

            handleChange={this.handleChange}
            required />

          <div className="buttons">
          <CustomButton type='submit' >Log In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
