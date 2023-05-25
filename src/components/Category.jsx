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
    setCategory(data);
  };

  return (
    <>
      <h1>Categorias de productos</h1>

      {category.data.map((category, i) => {
        return (
          <div key={i}>
            <h2>{`Categoría: ${category.category}`}</h2>
            <h3>{`la cantidad de productos en la categoria es: ${category.count}`}</h3>
            {category.Products.map((product, j) => {
              return (
                <div key={j}>
                  <h4>{`Nombre: ${product.name}`}</h4>
                  <p>Precio: {`Precio: ${product.price}`}</p>
                  <p>Descripción: {`Descropción: ${product.description}`}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Category;
