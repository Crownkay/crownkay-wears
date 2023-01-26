import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider'
import CartContainer from './CartContainer'
import Footer from './Footer'
import RowContainer from './RowContainer'

const FoodMenu = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  useEffect(() => {}, [ foodItems, cartShow]);
  return (
    <div>
      <RowContainer
          flag={true}
          data={foodItems?.filter((item) => item.category)}
  
        />
        {cartShow && ( <CartContainer />)}
        <Footer />
    </div>
    
  )
}

export default FoodMenu