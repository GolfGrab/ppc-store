import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LogInAndSignUpPage from './pages/log-in-and-sign-up-page/log-in-and-sign-up-page.component';
import { Firebase_Auth } from './firebase/auth-utils/auth.util';
import { creatUserProfileDocument } from './firebase/integrate-utils/create-user-profile-document.util';
import { Firebase_Firestore } from './firebase/firestore-utils/firestore.util';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';



class App extends React.Component {
  unsubscribeFromAuth = null
  unsubscribeFromSnapshot = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = Firebase_Auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await creatUserProfileDocument(userAuth, Firebase_Firestore)
          // console.log("returned useRef =  ", userRef)
          this.unsubscribeFromSnapshot = onSnapshot(userRef, (snapShot) => {
            // console.log("Current data: ", snapShot.data())
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          }
          )
        }
        else {
          setCurrentUser(null)
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/login-signup' element={<LogInAndSignUpPage />} />
        </Routes>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
