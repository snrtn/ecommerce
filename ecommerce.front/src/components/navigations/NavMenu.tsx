"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import menus from "./navbar.data";
import navMenu from "./navMenu.styles";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
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
          <div className={navMenu.overlay}>
            <div className={navMenu.closeButton} onClick={() => setOpen(false)}>
              <IoMdClose />
            </div>
          </div>
          <div className={navMenu.menuContent}>
            <div className={navMenu.welcomeMessage}>Welcome, Jared Diamond</div>
            <div className="w-full">
              {Object.keys(menus).map((menuKey) => (
                <div key={menuKey}>
                  <div
                    className={navMenu.menuButton}
                    onClick={() => handleMenuToggle(menuKey)}
                  >
                    {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                    {activeMenu === menuKey ? (
                      <FaChevronDown className={navMenu.chevronIcon} />
                    ) : (
                      <FaChevronRight className={navMenu.chevronIcon} />
                    )}
                  </div>
                  {activeMenu === menuKey && (
                    <div className={navMenu.subMenu}>
                      {menus[menuKey as keyof typeof menus].sections.map(
                        (section) => (
                          <div key={section.title}>
                            <h3 className={navMenu.sectionTitle}>
                              {section.title}
                            </h3>
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
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
