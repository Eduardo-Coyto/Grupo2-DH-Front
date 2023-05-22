function ProductDetail(props) {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <img src={`http://localhost:3002/images/products/${props.Imagen[0]?.imagen}`} alt="" /> 
      </div>
    </>
  );
}

export default ProductDetail;
