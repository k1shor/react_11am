import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav'

const Mainpage2 = () => {

  const item_store = useSelector(store => store.itemStore)
  const items = item_store.items
  const [filteredResult, setFilteredResult] = useState([])
  const [search, setSearch] = useState('')

  const filterItems = () => {
    let result = items.filter(item=> item.product_name.toLowerCase().match(search.toLowerCase()))
    setFilteredResult(result)
  }

  const dispatch = useDispatch()
  return (
    <>
      <Nav />
      <div className='bg-dark py-2'>
        <input type={'search'} className='form-control w-75 m-auto' placeholder='enter your search here' 
        onChange={(e)=> setSearch(e.target.value)} onKeyUp={filterItems}/>
      </div>
      <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-4">
          {
            // items.map(item => {
            filteredResult.map(item => {
              return <div className="col">
                <div className="card">
                  <img src={item.product_image} className="card-img-top" alt={item.product_image} style={{ height: "250px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.product_name}</h5>
                    <h5 className="card-title">{item.product_price}</h5>
                    <p className="card-text text-truncate">{item.product_description}</p>
                    <button className='btn btn-warning btn-sm w-100'
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
                      Add to Cart</button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Mainpage2