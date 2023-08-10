import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${apiURL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductsInCategory = (catName) => {
    fetch(`${apiURL}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button className="btn btn-info  " onClick={() => getProducts()}>
          ALL
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info m-5 "
              onClick={() => getProductsInCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
