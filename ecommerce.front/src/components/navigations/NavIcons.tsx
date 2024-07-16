"use client";

import { FaUser, FaShoppingCart } from "react-icons/fa";
import NavMenu from "./NavMenu";
import Link from "next/link";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link href={"/user"}>
        <FaUser className={navIcons.icon} />
      </Link>
      <Link href={"/cart"}>
        <FaShoppingCart className={navIcons.icon} />
      </Link>
      <div className={navIcons.navMenu}>
        <NavMenu />
      </div>
    </div>
  );
};

export default NavIcons;
