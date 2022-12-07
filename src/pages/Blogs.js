import React from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Blogs = () => {
    return (
        <>
            <Navbar />
            <h3 className='text-center text-decoration-underline text-success fw-bold mt-3'>Blogs</h3>
            <div className='container bg-secondary p-5'>
                <div className='blog d-flex p-5 bg-light rounded-5'>
                    <div className='blog-content w-75'>
                        <h3 className='fw-bold text-decoration-underline'>Blog Title</h3>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores, laboriosam pariatur nihil fugiat delectus iure ducimus at, non fuga qui possimus ut quam dolor consequatur voluptatibus, reiciendis fugit labore.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores, laboriosam pariatur nihil fugiat delectus iure ducimus at, non fuga qui possimus ut quam dolor consequatur voluptatibus, reiciendis fugit labore.
                        </p>
                        <h4 className='text-end'>- Author</h4>

                    </div>
                    <div className='author w-25 overflow-hidden'>
                        <img src='./images/img2.jpg' className='w-100 rounded-circle'/>
                    </div>
                </div>

                <div className='blog d-flex p-5 bg-light rounded-5 mt-5'>
                    <div className='blog-content w-75'>
                        <h3 className='fw-bold text-decoration-underline'>Blog Title</h3>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores, laboriosam pariatur nihil fugiat delectus iure ducimus at, non fuga qui possimus ut quam dolor consequatur voluptatibus, reiciendis fugit labore.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates asperiores, laboriosam pariatur nihil fugiat delectus iure ducimus at, non fuga qui possimus ut quam dolor consequatur voluptatibus, reiciendis fugit labore.
                        </p>
                        <h4 className='text-end'>- Author</h4>

                    </div>
                    <div className='author w-25 overflow-hidden'>
                        <img src='./images/img2.jpg' className='w-100 rounded-circle'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs