import React, { useContext } from "react";
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";

function ProductInfo({ product }) {

    const {cartItems , addToCart} = useContext(CartContext)

    const isInCart = cartItems.some(item => item.id === product.id ) 


     const handleAddToCart = () => {
    addToCart(product)

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

  return (
    <div className="details-item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">$ {product.price}</p>

      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        Hurry Up! Only <span>{product.stock}</span> products left in stock.
      </h5>

      <button  className={`btn  ${isInCart ? 'in-cart' : ''}`} onClick={handleAddToCart}>
        {isInCart ? 'In Cart' : 'Add To Cart'} <TiShoppingCart />

      </button>

      <div className="icons">
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

export default ProductInfo;
