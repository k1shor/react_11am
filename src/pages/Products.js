import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Products = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 p-3'>
                        <h4 className='text-decoration-underline fw-bold text-info'>Deals</h4>
                        <Link to='#' className='text-decoration-none fw-bold'><li className='list-unstyled text-success'>Daily Deals</li></Link>
                        <Link to='#' className='text-decoration-none fw-bold'><li className='list-unstyled text-success'>Most Popular</li></Link>
                        <Link to='#' className='text-decoration-none fw-bold'><li className='list-unstyled text-success'>Flash Sales</li></Link>

                        <h4 className='text-decoration-underline fw-bold text-info mt-3'>Categories</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cat1" />
                            <label className="form-check-label" htmlFor="cat1">
                                Mobile and Smartphones
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cat2" />
                            <label className="form-check-label" htmlFor="cat2">
                                Laptops and Computers
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cat3" />
                            <label className="form-check-label" htmlFor="cat3">
                                Beauty and Fitness
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cat4" />
                            <label className="form-check-label" htmlFor="cat4">
                                Accessories
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cat5" />
                            <label className="form-check-label" htmlFor="cat5">
                                Home and Gardening
                            </label>
                        </div>


                        <h4 className='text-decoration-underline fw-bold text-info mt-3'>Prices</h4>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" id="price1" name='price' />
                            <label className="form-check-label" htmlFor="price1">
                                Up to Rs. 1000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" id="price2" name='price' />
                            <label className="form-check-label" htmlFor="price2">
                                Rs. 1000 - Rs. 10000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" id="price3" name='price' />
                            <label className="form-check-label" htmlFor="price3">
                                Rs. 10000 - Rs. 50000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" id="price4" name='price' />
                            <label className="form-check-label" htmlFor="price4">
                                Rs. 50000 - Rs. 100000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="" id="price5" name='price' />
                            <label className="form-check-label" htmlFor="price5">
                                Above Rs. 1000
                            </label>
                        </div>


                    </div>
                    <div className='col-md-9 p-3'>
                        <div className="row row-cols-2 row-cols-md-3 g-4">
                            
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/cat_laptop.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/cat_mobile.png" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/cat_accessories.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/cat_console.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/img2.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/img7.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/samsung.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col my-3">
                                <div className="card">
                                    <img src="./images/cat_laptop.jpg" className="card-img-top card-image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className='btn btn-warning w-100'>View Details</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products