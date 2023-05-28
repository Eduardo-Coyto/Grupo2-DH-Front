import { Link } from "react-router-dom";
import { useState } from "react";

//ICONS
import { GiHamburgerMenu, GiSemiClosedEye } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleLinkClick = (e) => {
    e.stopPropagation();
    setShowMenu(false);
  };
  
  return (
    <>
      <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-secondary">
        <div className="xl:w-1/6 text-center">
          <Link className="" to="/" onClick={handleLinkClick}>
            <img
              className="w-36"
              src="http://localhost:3002/images/img/digitalShop.png"
              alt="logo Digital Shop"
            />
          </Link>
        </div>
        <nav
          className={`fixed bg-secondary sm:static w-[50%] sm:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 flex-1 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-10 transition-all duration-500`}
        >
          <Link className="text-primary font-bold " to="/users" onClick={handleLinkClick}>
            <p>Usuarios</p>
          </Link>
          <Link className="text-primary font-bold" to="/products" onClick={handleLinkClick}>
            <p>Productos</p>
          </Link>
          <Link className="text-primary font-bold" to="/category" onClick={handleLinkClick}>
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
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className={`fixed w-screen h-screen top-0 bottom-0 right-0 z-20 transition-transform duration-500 ease-in-out transform ${showMenu ? "translate-x-0" : "translate-x-full"}`}
          style={{ left: "50%" }}
        ></div>
      )}
    </>
  );
}
