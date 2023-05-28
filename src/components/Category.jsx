import React, { useEffect, useState } from "react";

const ApiCategory = "http://localhost:3002/api/product/category";

function Category() {
  const [category, setCategory] = useState({ data: [] });

  useEffect(() => {
    ansCategory(ApiCategory);
  }, []);

  const ansCategory = async (ApiCategory) => {
    const res = await fetch(ApiCategory);
    const data = await res.json();

    const sumPrice = data.data.map((cat) => {
      let total = cat.Products.reduce(
        (sum, product) => sum + parseFloat(product.price),
        0
      );
      return { ...cat, total };
    });
    setCategory({ data: sumPrice });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <h1 className="text-[40px] font-black text-center mt-4">
        Categorias de productos
      </h1>
      <div className="flex flex-wrap flex-grow justify-center items-center ">
        {category.data.map((category, i) => {
          return (
            <div
              className="flex flex-col justify-between my-4 bg-white max-w-sm mx-auto rounded-lg shadow-xl h-full"
              key={i}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-700 max-w-sm mx-auto">{`Categoría: ${category.category}`}</h2>
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="mt-4 text-base font-medium text-gray-700 max-w-sm mx-auto">{`Cantidad de productos en la categoría: ${category.count}`}</h3>
                <h3 className="text-base font-medium text-gray-500 max-w-sm mx-auto">{`Precio total por categoria`}</h3>
                <p className="py-4 px-2 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg text-white font-bold">{`$ ${category.total}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
