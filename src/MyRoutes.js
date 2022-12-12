import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Counter from './pages/Hooks/Counter'
import FetchData from './pages/Hooks/FetchData'
import Mainpage from './pages/Hooks/Mainpage'
import PostDetails from './pages/Hooks/PostDetails'
import Products from './pages/Products'
import Counter2 from './pages/redux/Counter2'
import Games from './pages/redux/Games'
import Cartpage from './pages/redux/Project/Cartpage'
import Mainpage2 from './pages/redux/Project/Mainpage'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Second from './Second'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/first' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/products' element={<Products/>}/>

            {/* Hooks */}
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/main' element = {<Mainpage/>}/>
            <Route path='/fetchdata' element={<FetchData/>}/>
            <Route path='/fetchdata/:id' element={<PostDetails/>}/>

            {/* redux */}
            <Route path='/count' element={<Counter2/>}/>
            <Route path='/games' element={<Games/>}/>
            <Route path='/mainpage' element= {<Mainpage2/>}/>
            <Route path='/cartpage' element={<Cartpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes