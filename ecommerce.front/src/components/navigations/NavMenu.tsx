"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import menus from "./navbar.data";
import navMenu from "./navMenu.styles";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState<string | null>(null);

  const handleSubMenu = (menu: string) => {
    if (subMenu === menu) {
      setSubMenu(null);
    } else {
      setSubMenu(menu);
    }
  };

  return (
    <div className={navMenu.container}>
      <div
        className={navMenu.menuIcon}
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaBars />
      </div>
      {open && (
        <div className={navMenu.menuOpen}>
          {!subMenu && (
            <div className="w-full">
              <div className={navMenu.closeButtonContainer}>
                <div></div>
                <div
                  className={navMenu.closeButton}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <IoCloseSharp />
                </div>
              </div>

              <button
                onClick={() => handleSubMenu("hommes")}
                className={navMenu.menuButton}
              >
                Hommes
              </button>
              <button
                onClick={() => handleSubMenu("femmes")}
                className={navMenu.menuButton}
              >
                Femmes
              </button>
            </div>
          )}

          {subMenu && (
            <div className={navMenu.subMenuContainer}>
              <div className={navMenu.closeButtonContainer}>
                <button
                  onClick={() => setSubMenu(null)}
                  className={navMenu.backButton}
                >
                  Back
                </button>
                <div
                  className={navMenu.closeButton}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <IoCloseSharp />
                </div>
              </div>
              {menus[subMenu as keyof typeof menus].sections.map((section) => (
                <div key={section.title}>
                  <h3 className={navMenu.sectionTitle}>{section.title}</h3>
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={navMenu.sectionItem}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
