import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  let [productId, setProductId] = useState({});
  let { id } = useParams();
  const API = `http://localhost:3002/api/product/${id}`;

  useEffect(() => {
    answer(API);
  }, []);

  const answer = async (API) => {
    let res = await fetch(API);
    let data = await res.json();
    setProductId(data.data);
  };

  return (
    <div>
      <div className="">
        <h3 className="">{productId?.name}</h3>
        <p className="">{productId?.price}</p>
        <p className="">{productId?.description}</p>
        <p className="">{productId.Brands?.name}</p>
        <p className="">{productId.Category?.category}</p>
        <p className="">{productId.Color?.color}</p>
        <p className="">{productId.Model?.name}</p>

        {productId?.Imagen?.map((image, i) => {
          return (
            <img
              key={image.id}
              src={`http://localhost:3002/images/products/${image.imagen}`}
              alt="Imagen Producto"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
