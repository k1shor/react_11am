import React from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="custom-bg text-secondary px-4 py-5 text-center border">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">About Us</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Subscribe</button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">Follow us</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About