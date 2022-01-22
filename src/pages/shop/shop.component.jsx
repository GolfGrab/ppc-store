import React, { useState } from 'react';
import SHOP_DATA from './shop.data';

export default function ShopPage(props) {
  const [collection,setCollection] = useState(SHOP_DATA)
  return (
    <div>Shop Page</div>
  )
}
