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
      <div className="mb-8 p-4">
        <h1 className="text-[40px] font-black text-center">
          Usuarios registrados
        </h1>
      </div>

      {users.length === 0 && <p>Cargando...</p>}
      {<p>Total: {users.total} </p>}
      <section className="">
        {users.data?.map((user, i) => {
          return (
            <Link key={i} to={"/user/" + user.id}>
              <User {...user} />
            </Link>
          );
        })}
      </section>
    </>
  );
}
