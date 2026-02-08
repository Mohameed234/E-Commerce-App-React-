import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product.jsx";
import "./categoryPage.css";
import SlideLoading from "../../components/slideProducts/SlideLoading";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import PageTransition from "../../components/PageTransition";

function CategoryPage() {
  const { categoryName } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <PageTransition key={categoryName}>
        <div className="category-products">
      {loading ? (
        <SlideLoading key={categoryName} />
      ) : (
        <div className="container">
          <div className="top-slide">
            <h2>{categoryName}</h2>
          </div>

          <div className="products">
            {categoryProducts.map((item, index) => (
              <Product key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default CategoryPage;
