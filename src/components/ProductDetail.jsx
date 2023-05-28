function ProductDetail(props) {
  return (
    <>
      <div className="bg-white max-w-sm mx-auto my-4 rounded-lg shadow-xl pt-4 flex flex-col gap-2">
        <img
          className="w-60 h-60 md:w-96 md:h-96  object-cover"
          src={`http://localhost:3002/images/products/${props.Imagen[0]?.imagen}`}
          alt=""
        />
        <h3 className="px-2 text-2xl font-bold text-gray-700">{props.name}</h3>
        <p className="px-2 text-gray-500">{props.description}</p>
        <p className="py-4 px-2 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg text-white font-bold">{`$ ${props.price}`}</p>
      </div>
    </>
  );
}

export default ProductDetail;
