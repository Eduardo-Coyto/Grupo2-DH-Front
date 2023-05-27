import React, { useEffect, useState } from "react";
import Product from "./Product.jsx";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";

function Products() {
  let [product, setProduct] = useState([]);
  let [total, setTotal] = useState(0);

  const API = "http://localhost:3002/api/product";

  useEffect(() => {
    answer(API); // le hace el fetch a la api
  }, []);

  const answer = async (API) => {
    let res = await fetch(API);
    let data = await res.json();
    setTotal(data.Total);
    setProduct(data.data);
  };

  return (
    <>
        <h1 className="text-[32px] m font-black text-rigth max-w-sm mx-auto mt-4">
          Productos registrados
        </h1>
      <div className="bg-white mx-auto max-w-full flex flex-wrap justify-center rounded-lg shadow-xl gap-2">
        {product.map((product, i) => {
          return (
            <Link key={i} to={`/product/${product.id}`}>
              <ProductDetail {...product} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Products;
