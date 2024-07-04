import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'


import Navbar from './components/Navbar'
import Intelligence from './components/Intelligence'
import Introduction from './components/Introduction'
import ServicesCard from './components/ServicesCard'
import Clients from './components/Clients'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Intelligence/>
    <Introduction/>
    <ServicesCard/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default App