import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ApiLastUser = "http://localhost:3002/api/user/last";
const ApiLastProduct = "http://localhost:3002/api/product/last";

function Home() {
  let [lastUser, setLastUser] = useState([]);
  let [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    ansUser(ApiLastUser);
    ansProduct(ApiLastProduct);
  }, []);

  const ansUser = async (ApiLastUser) => {
    const res = await fetch(ApiLastUser);
    const dataUser = await res.json();
    setLastUser(dataUser.data);
  };
  const ansProduct = async (ApiLastProduct) => {
    const res = await fetch(ApiLastProduct);
    const dataProduct = await res.json();

    setLastProduct(dataProduct.data);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <div className="bg-white mb-8 max-w-sm mx-auto rounded-lg shadow-xl mt-4">
        <div className="pt-4 flex flex-col gap-2">
          <img
            className="w-96 h-96 object-fit"
            src={`http://localhost:3002/images/products/${lastProduct[0]?.Imagen[0]?.imagen}`}
            alt="Imagen del producto"
          />
          <h3 className="px-2 text-2xl font-bold text-gray-700">
            {lastProduct[0]?.name}
          </h3>
          <p className="px-2 text-gray-500">{lastProduct[0]?.description}</p>
          <p className="py-4 px-2 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg text-white font-bold">{`$ ${lastProduct[0]?.price}`}</p>
        </div>
      </div>
      <div className="bg-white mb-8 max-w-sm mx-auto rounded-lg shadow-xl mt-4">
        <div className="py-4 flex flex-col gap-2">
          <img
            className="w-96 h-96 object-fit"
            src={`http://localhost:3002/images/avatar/${lastUser[0]?.avatar}`}
            alt="Imagen del producto"
          />
          <h3 className="px-2 text-2xl font-bold text-gray-700">{`${lastUser[0]?.first_name} ${lastUser[0]?.last_name}`}</h3>
          <p className="px-2 text-gray-500">{lastUser[0]?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
