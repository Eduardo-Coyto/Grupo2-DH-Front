
export default function User(props) {
  return (
    <div className=''>
      <h3 className=''>{props.first_name} {props.last_name}</h3>
      <p className=''>{props.email}</p>
      <img className='' src={"http://localhost:3002/images/avatar/" + props.avatar} alt="Imagen de usuario" />
    </div>
  );
}