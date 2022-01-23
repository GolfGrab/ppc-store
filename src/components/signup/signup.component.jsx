import React, { Component } from 'react'
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Firebase_Auth } from './../../firebase/auth-utils/auth.util';
import { creatUserProfileDocument } from './../../firebase/integrate-utils/create-user-profile-document.util';
import { Firebase_Firestore } from './../../firebase/firestore-utils/firestore.util'


export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await createUserWithEmailAndPassword(Firebase_Auth, email, password)
      await creatUserProfileDocument(user, Firebase_Firestore, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

