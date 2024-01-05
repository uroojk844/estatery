import { FaBars, FaHome } from "react-icons/fa";
import Button from "./Button";
import NavItem from "./NavItem";

const NavBar = () => {
  const links = [
    {
      name: "Rent",
      href: "/",
    },
    {
      name: "Buy",
      href: "/",
    },
    {
      name: "Sell",
      href: "/",
    },
    {
      name: "Manage Property",
      href: "/",
      children: true,
    },
    {
      name: "Resources",
      href: "/",
      children: true,
    },
  ];

  return (
    <div className="border-b">
      <nav className="flex items-center bg-white text-indigo-950 gap-9 justify-between p-4 max-w-[1200px] mx-auto">
        <div className="font-[600] flex items-center gap-1">
          <FaHome /> Estatery
        </div>
        <div className="flex gap-9 text-sm max-md:hidden">
          {links.map((link, index) => (
            <NavItem link={link} key={index} />
          ))}
        </div>
        <div className="flex gap-4 max-md:hidden">
          <Button type="outline">Login</Button>
          <Button>Sign up</Button>
        </div>
        <div className="md:hidden">
          <FaBars size={20} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
