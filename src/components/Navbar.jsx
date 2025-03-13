import { NavLink } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

// import {Big_Shoulders} from 'https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap';
const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between items-center px-5 py-3 bg-[#1e293b] shadow-md shadow-black/30">
      <h1 className="text-4xl font-bold text-[#a6d0dd] bigshoulder px-5">Civic AI</h1>

      <nav className="gap-6 flex">
        {[
          { name: "Home", path: "/" },
          { name: "Past Records", path: "/past incidents" },
          { name: "Login", path: "/login" },
          { name: <IoSettingsSharp />, path: "/settings" },
        ].map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `group font-semibold text-xl px-4 py-2 rounded-xl flex items-center transition-all 
              ${isActive ? "text-[#a6d0dd] bg-[#334155]" : "text-gray-300"}
              hover:bg-[#475569] hover:text-white`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
