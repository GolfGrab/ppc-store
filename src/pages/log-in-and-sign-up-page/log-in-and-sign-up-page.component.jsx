import React from 'react';
import LogIn from '../../components/login/login.component';
// import FLogIn from '../../components/login/login.f.component';
import SignUp from '../../components/signup/signup.component';
import './log-in-and-sign-up-page.styles.scss'

export default function LogInAndSignUpPage() {
  return (
    <>
      <div className="log-in-and-sign-up">
      <LogIn />
      <SignUp/>
    </div>

    </>
  )
}
