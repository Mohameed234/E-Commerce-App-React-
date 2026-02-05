import React from 'react'
import TopHeader from './components/header/TopHeader.jsx'
import BtmHeader from './components/header/BtmHeader.jsx'
import Home from './page/home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './page/productDetails/ProductDetails.jsx'

function App() {
  

  return (
    <>
    <header>
      <TopHeader />
      <BtmHeader />
    </header>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path={`/products/:id`} element={<ProductDetails />} />
    </Routes>
    
      
    </>
  )
}

export default App
