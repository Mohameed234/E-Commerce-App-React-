import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShare, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

function product({ item }) {
  const {cartItems , addToCart} = useContext(CartContext)

  const isInCart = cartItems.some(product => product.id === item.id ) 

  const handleAddToCart = () => {
    addToCart(item)

    toast.success('Product added to cart!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });
  }


  

  const rating = item.rating;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status-cart">
          <FaCheck /> In Cart
        </span>

        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>

        <p className="name-product">{item.title}</p>

        <div className="stars">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} />
          ))}
          {hasHalfStar && <FaRegStarHalfStroke />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaStar key={`e-${i}`} style={{ opacity: 0.3 }} />
          ))}
        </div>

        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span className="btn-addtocart" onClick={handleAddToCart}>
          <FaCartPlus />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default product;
