import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
  const cart = useSelector(state=>state.cartStore)
  const cart_items_number = cart ? cart.cart_items.length : 0
  return (
    <>
        <div className='d-flex justify-content-around fs-2 bg-dark '>
            <Link to= '/mainpage' className='text-white text-decoration-none'>Home</Link>
            <Link to= '/cartpage' className='text-white text-decoration-none'>Cart
            ({cart_items_number})</Link>
        </div>
    </>
  )
}

export default Nav