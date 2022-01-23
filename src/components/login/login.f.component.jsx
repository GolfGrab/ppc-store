import React from 'react'
import FormInput from '../form-input/form-input.component';
import './login.styles.scss'
import CustomButton from './../custom-button/custom-button.component';
import signInWithGoogle from './../../firebase/auth-utils/google-auth.util';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Firebase_Auth } from '../../firebase/auth-utils/auth.util';
import { useNavigate } from 'react-router-dom';

export default function FLogIn() {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
      const { email, password } = state
      await signInWithEmailAndPassword(Firebase_Auth, email, password)
      alert('welcome back')
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div className='log-in'>
        <h2>I already have an account</h2>
        <span>Log in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={state.email}
            handleChange={handleChange}
            required />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={state.password}

            handleChange={handleChange}
            required />

          <div className="buttons">
            <CustomButton type='submit' >Log In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    </>
  )
}
