import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FetchData = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response=> response.json())
        // .then(data=> setPosts(data))
        // .catch(error=> console.log(error))

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(data => setPosts(data.slice(0, limit)))
            .catch(error => console.log(error))
    }, [limit])
    return (
        <>
            <h1>Fetch Data</h1>
            {
                posts.map((item) => {
                    return <>
                        <h5>{item.id}. <Link to={`/fetchdata/${item.id}`}>{item.title}</Link></h5>
                    </>
                })
            }

            {limit < 100 &&
                <button className='btn btn-success' onClick={() => setLimit(limit + 20)}>Show More</button>
            }
            {limit > 0 &&
                <button className='btn btn-danger' onClick={() => setLimit(limit - 20)}>Show Less</button>
            }


        </>
    )
}

export default FetchData