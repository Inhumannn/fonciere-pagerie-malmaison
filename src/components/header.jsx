import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-[1440px] m-auto flex items-center justify-between p-2 xl:py-5 xl:px-8">
      <a href="#">
        <img src="img/logo.jpg" alt="Logo de la marque" className="w-50" />
      </a>
      <nav className="flex gap-2.5">
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } text-[11px] xl:flex gap-[50px] text-end`}
        >
          <li className="xl:py-[45px] hover:text-white hover:bg-[#27697C] text-center mb-2.5 xl:mb-0">
            <NavLink className="xl:mx-9 uppercase">Reuil Malmaison</NavLink>
          </li>
          <li className="xl:py-[45px] hover:text-white hover:bg-[#27697C] text-center mb-2.5 xl:mb-0 ">
            <NavLink className="xl:mx-9 uppercase">Bureaux à Meaux</NavLink>
          </li>
          <li className="xl:py-[45px] hover:text-white hover:bg-[#27697C] text-center mb-2.5 xl:mb-0">
            <NavLink className="xl:mx-9 uppercase">Bureaux à Louer</NavLink>
          </li>
          <li className="xl:py-[45px] hover:text-white hover:bg-[#27697C] text-center mb-2.5 xl:mb-0">
            <NavLink className="xl:mx-9 uppercase">Galerie</NavLink>
          </li>
          <li className="xl:py-[45px] hover:text-white hover:bg-[#27697C] text-center mb-2.5 xl:mb-0">
            <NavLink className="xl:mx-9 uppercase">Contact</NavLink>
          </li>
        </ul>
        <div className="xl:hidden block">
          <Menu className="text-[#777] text-[24px]" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
