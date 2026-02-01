import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShare, FaRegHeart, FaCartPlus } from "react-icons/fa";

function product({ item }) {
  console.log(item);

  const rating = item.rating;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="product">
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

      <div className="icons">
        <span>
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
