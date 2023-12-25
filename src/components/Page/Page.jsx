import React from 'react'
import './Page.css'
import Navbar from '../navbar/Navbar'
import Home from '../Home/Home'
import ChooseTheWorld from '../ChooseTheWorld/ChooseTheWorld'

export default function Page() {
  return (
    <div className='page'>
        <Navbar/>
        <Home/>
        <ChooseTheWorld/>
    </div>
  )
}
