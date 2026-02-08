import React, { useEffect, useState } from "react";
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { TiShoppingCart } from "react-icons/ti";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductLoading from "./ProudctLoading";
import ProductImages from "./ProductImaegs";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

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
      return;
    }

    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setloadingRelatedProducts(false));
  }, [product?.category]);

  if (!product) {
    return <p>Product Not Found</p>;
  }

  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <ProductLoading />
        ) : (
          <div className="item-details">
            <div className="container">
              <ProductImages product={product} />

              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingRelatedProducts ? (
          <ProductLoading />
        ) : (
          <SlideProduct
            key={product.category}
            title={product.category.replace("-", " ")}
            data={relatedProducts}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
