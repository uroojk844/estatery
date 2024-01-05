import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const NavItem = ({ link }) => {
  const { name, children } = link;
  return (
    <Link
      href="/"
      className={`font-[500] ${children && "flex gap-2 items-center"}`}
    >
      {name}
      {children && <FaChevronDown size={12} />}
    </Link>
  );
};

export default NavItem;
