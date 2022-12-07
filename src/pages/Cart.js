import React from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Cart = () => {
  return (
    <>
        <Navbar/>
            <h3 className='text-center text-decoration-underline text-success fw-bold mt-3'>Cart Items</h3>
            <table className='table w-75 m-auto table-bordered text-center table-hover align-middle'>
                <thead>
                    <tr className='table-dark'>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Info</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src='./images/cat_mobile.png' style={{height:"100px"}}/>
                        </td>
                        <td>
                            <h3>Real ME</h3>
                            <h4>Rs. 40000</h4>
                        </td>
                        <td>
                            <button className='btn btn-warning'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src='./images/cat_mobile.png' style={{height:"100px"}}/>
                        </td>
                        <td>
                            <h3>Real ME</h3>
                            <h4>Rs. 40000</h4>
                        </td>
                        <td>
                            <button className='btn btn-warning'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src='./images/cat_mobile.png' style={{height:"100px"}}/>
                        </td>
                        <td>
                            <h3>Real ME</h3>
                            <h4>Rs. 40000</h4>
                        </td>
                        <td>
                            <button className='btn btn-warning'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        <Footer/>
    </>
  )
}

export default Cart