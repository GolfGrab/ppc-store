import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

export default function CartDropDown() {
  return (
    <>
      <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton>GO TO CHeCKOUT</CustomButton>
      </div>
    
    </>
  );
}
