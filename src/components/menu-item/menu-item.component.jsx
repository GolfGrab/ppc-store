import React from 'react';
import './menu-item.styles.scss';
;


const MenuItem = ({title , key , imageUrl , size}) => (
  <div className={`menu-item ${size}`} key={key} >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content" >
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;
