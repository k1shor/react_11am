import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const params = useParams()
    const id = params.id

    const [post, setPost] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
        .catch(err=>console.log(err))
    },[])

  return (
    <>
    PostDetails
    <h2>Post id: {post.id}</h2>
    <h2>User id: {post.userId}</h2>
    <h3>Post Title: <u>{post.title}</u></h3>
    <h4>Body: {post.body}</h4>
    </>
  )
}

export default PostDetails