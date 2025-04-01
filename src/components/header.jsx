import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="max-w-[1440px] m-auto flex items-center justify-between">
      <a href="#">
        <img src="img/logo.jpg" alt="Logo de la marque" className="w-50" />
      </a>
      <nav>
        <ul className="flex">
          <li className="py-[45px] hover:text-white hover:bg-[#27697C]">
            <NavLink className="mx-11 uppercase">Reuil Malmaison</NavLink>
          </li>
          <li className="py-[45px] hover:text-white hover:bg-[#27697C]">
            <NavLink className="mx-11 uppercase">Bureaux à Meaux</NavLink>
          </li>
          <li className="py-[45px] hover:text-white hover:bg-[#27697C]">
            <NavLink className="mx-11 uppercase">Bureaux à Louer</NavLink>
          </li>
          <li className="py-[45px] hover:text-white hover:bg-[#27697C]">
            <NavLink className="mx-11 uppercase">Galerie</NavLink>
          </li>
          <li className="py-[45px] hover:text-white hover:bg-[#27697C]">
            <NavLink className="mx-11 uppercase">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
