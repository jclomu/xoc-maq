import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <NavLink to="/">
            <p className="text-white text-xl font-bold">XOC</p>
          </NavLink>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/bands"
              className={({ isActive }) =>
                `text-white ${isActive ? 'font-bold' : 'hover:text-gray-400'}`
              }
            >
              Bandas
            </NavLink>
          </li>  
          <li>
            <NavLink
              to="/merch"
              className={({ isActive }) =>
                `text-white ${isActive ? 'font-bold' : 'hover:text-gray-400'}`
              }
            >
              Merch
            </NavLink>
          </li>  
          {/* <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-white ${isActive ? 'font-bold' : 'hover:text-gray-400'}`
              }
            >
              Carrito
            </NavLink>
          </li>   */}
        </ul>
      </div>
    </nav>
  );
}
