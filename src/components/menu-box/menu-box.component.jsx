import React, { Component } from 'react'
import MenuItem from './../menu-item/menu-item.component';
import "./menu-box.styles.scss"

export default class MenuBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          title: "DOG",
          imageUrl: "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
          id: "1",
        },
        {
          title: "CAT",
          imageUrl: "https://images.unsplash.com/photo-1637797124175-9e48c9112397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
          id: "2",
        },
        {
          title: "BIRD",
          imageUrl: "https://i.etsystatic.com/15987207/r/il/e6421c/3555361421/il_794xN.3555361421_ku8t.jpg",
          id: "3",
        },
        {
          title: "DUCK",
          imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2019/07/image-5d1e6dc58d14a__700.jpg",
          id: "4",
          size: "large",
        },
        {
          title: "ALL PETS?",
          imageUrl: "https://www.rachaelrayshow.com/sites/default/files/styles/1100x620/public/images/2021-09/pet_costumes.jpg?h=f35a534b&itok=BX_9nfa8",
          id: "5",
          size: "large",
        },
      ]
    }
  }

  render() {
    return (
      <div className='menu-box'>
        {this.state.sections.map(({ title, imageUrl, id,size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}
