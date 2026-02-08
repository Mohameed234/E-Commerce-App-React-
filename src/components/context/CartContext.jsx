import React, { Children, createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {

  const [cartItems, setCartItems] = useState(() => {
      const savedItems = localStorage.getItem('cartItems')
      return savedItems ? JSON.parse(savedItems) : []
  })

  // if we want to add quantity to the cart items, we can do it like this:
  const increaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ))
  }
  // if we want to decrease quantity to the cart items, we can do it like this:
  const decreaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === id ? {...item, quantity: Math.max(1, item.quantity - 1)} : item
    ))
  }



  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
      
  return (
    
    <CartContext.Provider value={{cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
