import React, { useContext } from 'react'
import Data from './Data'
import { GlobalContext } from './GlobalContext'

const Mainpage = () => {
    const info = useContext(GlobalContext)
  return (
    <>
<h1>{info}</h1>
        <Data name="Kishor" address="kathmandu" phone="12345679"/>

        <Data name="asdf" address="ktm" phone="1234"/>
        <Data name="asdf" address="ktm" phone="1234"/>
        <Data name="asdf" address="ktm" phone="1234"/>
    </>
  )
}

export default Mainpage