import React from 'react'
import Header from './../navbar/Navbar';
import '../App.css'
import Lora from '../logo/lora.png'
import Footer from '../navbar/Footer';
const Main = () => {
  return (
    <div className='App'>
        <div className='App-header'>
          <Header/>
        <div className='bg1'>
          <img src={Lora} alt={"SSTPL"} />
        </div>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Main