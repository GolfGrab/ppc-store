import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import Logo from '../../assets/pet_logo.svg';
import { Firebase_Auth } from './../../firebase/auth-utils/auth.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

function Header({ currentUser,hidden }) {
  return (
    <div className="header">
      <Link className='logo-container' to="/">
        <img className='logo' width="35rem" src={Logo} alt='logo' />
      </Link>
      <div className="options">
        {
          !currentUser ?
            ''
            :
            <div className="option">hello {currentUser.displayName}</div>
        }

        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>

        {
          currentUser ?
            <div className="option" onClick={() => Firebase_Auth.signOut()}>
              <div className="option">SIGN OUT</div>
            </div>
            :
            <Link to='/login-signup'><div className="option">LOG IN or SIGN UP</div></Link>
        }
        <CartIcon/>
      </div>
      {hidden ? null: <CartDropDown />}
    </div>
  )
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
})



export default connect(mapStateToProps)(Header)