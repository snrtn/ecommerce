"use client";

import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";
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
        <NavMenu />
        <Link href="/" className={navbar.logoLink}>
          <div className={navbar.logoText}>KIM</div>
        </Link>
        <NavSearchBar />
        <NavIcons />
      </div>
      <div className={navbar.desktopNav}>
        <div className={navbar.desktopLeft}>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={36} height={36} />
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
      <div className={navbar.menuContainer}>
        <div className={navbar.menu}>
          <div
            onMouseEnter={() => handleMouseEnter("hommes")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className={`${navbar.menuItem} ${dropdown === "hommes" ? navbar.activeMenuItem : ""}`}
              style={{ width: "120px", textAlign: "left" }}
            >
              Man
            </a>

            {dropdown === "hommes" && (
              <NavMenuDrop
                sections={menus.hommes.sections}
                onMouseEnter={() => handleMouseEnter("hommes")}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("femmes")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className={`${navbar.menuItem} ${dropdown === "femmes" ? navbar.activeMenuItem : ""}`}
              style={{ width: "120px", textAlign: "left" }}
            >
              Woman
            </a>
            {dropdown === "femmes" && (
              <NavMenuDrop
                sections={menus.femmes.sections}
                onMouseEnter={() => handleMouseEnter("femmes")}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
