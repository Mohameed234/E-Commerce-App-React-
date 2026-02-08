import React from 'react'
import TopHeader from './components/header/TopHeader.jsx'
import BtmHeader from './components/header/BtmHeader.jsx'
import Home from './page/home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './page/productDetails/ProductDetails.jsx'
import Cart from './page/cart/Cart.jsx'
import  { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop.jsx'
import { AnimatePresence } from 'framer-motion'
import CategoryPage from './page/categoryPage/CategoryPage.jsx'

function App() {
  

  return (
    <>
    <header>
      <TopHeader />
      <BtmHeader />
    </header>
    <Toaster position="bottom-right" toastOptions={{duration: 3000}} style={{fontSize: '14px' }} />
    
    <ScrollToTop />

    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path={`/products/category/:categoryName`} element={<CategoryPage />} />
        <Route path={`/products/:id`} element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
    
      
    </>
  )
}

export default App
