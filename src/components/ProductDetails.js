import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return <Product product={product} showButton={false} />;
}

export default ProductDetails;
