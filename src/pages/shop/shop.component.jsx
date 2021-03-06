import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

export default function ShopPage(props) {
  const [collections,setCollections] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {
        collections.map(({id,...otherCollectionProps}) =>
          <CollectionPreview key={id} {...otherCollectionProps}/>
        )
      }
    </div>
  )
}
