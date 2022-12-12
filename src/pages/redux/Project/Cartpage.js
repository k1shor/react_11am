import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav'

const Cartpage = () => {
    const cart_store = useSelector(store => store.cartStore)
    const cart_items = cart_store ? cart_store.cart_items : []
    console.log(cart_store)
    const dispatch  =useDispatch()
    const removeFromCart = (item) => e=>  {
        e.preventDefault()
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        })

    }
    return (
        <>
            <Nav />
            <h3 className='text-decoration-underline text-center'>Cart Items</h3>
            <table className='table w-75 m-auto text-center align-middle table-hover'>
                <thead>
                    <tr className='table-dark'>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart_items.map((item, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                    <img src={item.product_image} alt={item.product_image} style={{ height: "150px" }} />
                                </td>
                                <td width={'400px'}>
                                    <h4>{item.product_name}</h4>
                                    <h4>{item.product_price}</h4>
                                    <p>{item.product_description}</p>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={removeFromCart(item)}><i className='bi bi-trash'></i></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Cartpage