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
    <>
      <div className="bg-white max-w-sm mx-auto my-4 rounded-lg shadow-xl pt-4 flex flex-col gap-2">
        {productId?.Imagen?.map((image, i) => {
          return (
            <img
            className="w-full object-cover"
              key={image.id}
              src={`http://localhost:3002/images/products/${image.imagen}`}
              alt="Imagen Producto"
            />
          );
        })}
        <h3 className="px-2 text-2xl font-bold text-gray-700">{productId?.name}</h3>
        <p className="px-2 text-gray-500">{productId?.description}</p>
        <p className="px-2 text-gray-500">{productId.Brands?.name}</p>
        <p className="px-2 text-gray-500">{productId.Category?.category}</p>
        <p className="px-2 text-gray-500">{productId.Color?.color}</p>
        <p className="px-2 text-gray-500">{productId.Model?.name}</p>
        <p className="py-4 px-2 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg text-white font-bold">{`$ ${productId?.price}`}</p>
      </div>
    </>
  );
}

export default Product;
