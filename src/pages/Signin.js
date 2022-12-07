import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Signin = () => {
    return (
        <>
            <Navbar />
            <main class="form-signin w-50 border mt-5 m-auto rounded-5 shadow-lg p-5 text-center">
                <form>
                    <img class="mb-4" src="./images/banner.jpg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <div className='d-flex justify-content-between'>
                        <span>Do not have an account ? <Link to='/register'>Register</Link></span>
                        <Link to='/forgetpassword'>Forget Password</Link>
                    </div>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Signin