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
    <>
      <div>
        <img
          className=""
          src={`http://localhost:3002/images/products/${lastProduct[0]?.Imagen[0]?.imagen}`}
          alt="Imagen del producto"
        />
        <h3 className="">{lastProduct[0]?.name}</h3>
        <p className="">{lastProduct[0]?.price}</p>
        <p className="">{lastProduct[0]?.description}</p>
      </div>
      <div>
        <img
          className=""
          src={`http://localhost:3002/images/avatar/${lastUser[0]?.avatar}`}
          alt="Imagen del producto"
        />
        <h3 className="">{`${lastUser[0]?.first_name} ${lastUser[0]?.last_name}`}</h3>
        <p className="">{lastUser[0]?.email}</p>
      </div>
    </>
  );
}

export default Home;
