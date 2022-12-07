import React from 'react'

// const Data = (info) => {
const Data = ({name, address, phone}) => {
    // console.log(props)
    // object destructuring
    // const {name, address, phone} = info
  return (
    <>
        <h1>Name: {name} </h1>
        <h2>Address: {address}</h2>
        <h3>Phone: {phone}</h3>
    </>
  )
}

export default Data