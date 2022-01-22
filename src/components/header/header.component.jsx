import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/pet_logo.svg';

export default function Header() {
  return (
    <div className="header">
      <Link className='logo-container' to="/">
      <img className='logo' width="35rem" src='https://www.svgrepo.com/show/29317/pets.svg' alt='logo'/>
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
      </div>
    </div>
  )
}
