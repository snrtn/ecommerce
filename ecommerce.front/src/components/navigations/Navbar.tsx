import Link from "next/link";
import NavMenu from "./NavMenu";
import NavSearchBar from "./NavSearchBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import NavMenuDrop from "./NavMenuDrop";
import menus from "./navbar.data";
import navbar from "./navbar.styles";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div className={navbar.container}>
      <div className={navbar.mobileNav}>
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-center">
            <NavMenu />
            <Link href="/">
              <div className={navbar.logoText}>KIM</div>
            </Link>
          </div>
          <NavIcons />
        </div>
        <div className="md:hidden">
          <NavSearchBar />
        </div>
      </div>
      <div className={navbar.desktopNav}>
        <div className={navbar.desktopLeft}>
          <NavMenu />
          <Link href="/" className="flex items-center gap-3">
            <div className={navbar.logoText}>KIM</div>
          </Link>
        </div>
        <div className={navbar.desktopCenter}>
          <NavSearchBar />
        </div>
        <div className={navbar.desktopRight}>
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
