import React from 'react'
import { useBasket } from '../../store/BasketContext'
const BasketCard = () => {

  const {items}=useBasket();
  return (
    <div>UI
      <div>{items}</div>
      <div>{items.length}</div>
    </div>
  )
}

export default BasketCard