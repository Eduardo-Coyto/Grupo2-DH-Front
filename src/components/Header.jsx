import { Link } from "react-router-dom";
import { useState } from "react";

//ICONS
import { GiHamburgerMenu, GiSemiClosedEye } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-secondary">
      <div className="xl:w-1/6 text-center">
        <Link className="" to="/">
          <img
            className="w-20"
            src="http://localhost:3002/images/img/DS.png"
            alt="logo Digital Shop"
          />
        </Link>
      </div>
      <nav
        className={`fixed bg-secondary sm:static w-[50%] sm:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 flex-1 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-10 transition-all duration-500`}
      >
        <Link className="text-primary font-bold " to="/users">
          <p>Usuarios</p>
        </Link>
        <Link className="text-primary font-bold" to="/products">
          <p>Productos</p>
        </Link>
        <Link className="text-primary font-bold" to="/category">
          <p>Categorias</p>
        </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="sm:hidden text-2xl p-2 text-primary"
      >
        {showMenu ? <GiSemiClosedEye /> : <GiHamburgerMenu />}
      </button>
    </header>
  );
}
