import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "./User.jsx";

const API = "http://localhost:3002/api/user";

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    userRequest(API);
  }, []);

  const userRequest = async (API) => {
    let res = await fetch(API);
    let data = await res.json();
    setUsers(data);
  };

  return (
    <>
        <h1 className="text-[40px] font-black text-center">
        Usuarios registrados
      </h1>
      {users.length === 0 && <p>Cargando...</p>}
      {
        <h3 className="text-2xl font-bold text-gray-700 max-w-sm mx-auto">
          Total: {users.total}{" "}
        </h3>
      }
      <div className="bg-white mx-auto max-w-full flex flex-wrap justify-center rounded-lg shadow-xl gap-2">
        {users.data?.map((user, i) => {
          return (
            <Link key={i} to={"/user/" + user.id} className="w-64 md:w-auto  px-2 my-2">
              <User {...user} />
            </Link>
          );
        })}
      </div>
    </>
  
  );
}
