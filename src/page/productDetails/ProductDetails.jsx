import React, { useEffect, useState } from "react";
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import './productDetails.css'
import { TiShoppingCart } from "react-icons/ti";
import SlideProduct from "../../components/slideProducts/SlideProduct"
import ProductLoading from "./ProudctLoading";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingRelatedProducts, setloadingRelatedProducts] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);


  useEffect(() => {
    if (!product) {
      return
    }

     fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then(res => res.json())
      .then((data) =>{
        setRelatedProducts(data.products)
      } )
      .catch(error => console.error(error))
      .finally(() => setloadingRelatedProducts(false))
  }, [product?.category])
  
console.log(product);
console.log(relatedProducts);





  

  if (loading) {
    return <ProductLoading/>
  }

  if (!product) {
    return <p>Product Not Found</p>;
  }

  return (
    

    <div>


      <div className="item-details">
        <div className="container">
          <div className="imgs-item">
            <div className="big-img">
              <img id="big-img" src={product.images[0]} alt={product.title} />
            </div>
            <div className="sm-img">
              {product.images.map((img, index) => {
                return <img key={index} src={img} alt={product.title} onClick={() => {document.getElementById('big-img').src = img}} />;
              })}
            </div>
          </div>

          <div className="details-item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
            </div>

            <p className="price">
              $ {product.price}
            </p>

            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="desc">
              {product.description}
            </p>
            <h5 className="stock">
              Hurry Up! Only <span>{product.stock}</span> products left in stock.
            </h5>

            <button className="btn">
              Add To Cart <TiShoppingCart />
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
        </div>
      </div>

      {
        loadingRelatedProducts ? (<ProductLoading/>) : (<SlideProduct key={product.category} title={product.category.replace("-", " ")} data={relatedProducts} />)
      }
    </div>


  );
}

export default ProductDetails;
