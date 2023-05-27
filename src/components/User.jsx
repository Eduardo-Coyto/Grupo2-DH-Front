
export default function User(props) {
  return (
    <div className='bg-white max-w-sm mx-auto my-6 rounded-lg shadow-xl  flex flex-col items-center'>
      <img className='w-full object-cover' src={"http://localhost:3002/images/avatar/" + props.avatar} alt="Imagen de usuario" />
      <h3 className='flex self-start px-2 text-2xl font-bold text-gray-700'>{props.first_name} {props.last_name}</h3>
      <p className='flex self-start px-2 text-gray-500'>{props.email}</p>
    </div>
  );
}
