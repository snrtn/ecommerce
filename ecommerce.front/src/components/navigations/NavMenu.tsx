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
  const [activeSections, setActiveSections] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMenuToggle = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveSections({});
    } else {
      setActiveMenu(menu);
      setActiveSections({});
    }
  };

  const handleSectionToggle = (section: string) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleClose = () => {
    setOpen(false);
    setActiveMenu(null);
    setActiveSections({});
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
          <div className={navMenu.overlay} onClick={handleClose}>
            <div className={`${navMenu.closeButton} visible md:hidden`}>
              <IoMdClose size={24} className="!text-white" />
            </div>
          </div>
          <div className={`${navMenu.menuContent} overflow-y-auto`}>
            <div className={navMenu.welcomeMessage}>
              <div className="flex flex-1">Welcome, Jared Diamond</div>
              <div
                className="hidden cursor-pointer md:flex"
                onClick={handleClose}
              >
                <IoMdClose size={24} />
              </div>
            </div>
            <div className="w-full">
              {Object.keys(menus).map((menuKey) => {
                const Icon = menus[menuKey].icon;
                return (
                  <div key={menuKey}>
                    <div
                      className={navMenu.menuButton}
                      onClick={() => handleMenuToggle(menuKey)}
                    >
                      <div className="flex items-center">
                        <Icon />
                        <span className="ml-2">
                          {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                        </span>
                      </div>
                      {activeMenu === menuKey ? (
                        <FaChevronDown className={navMenu.chevronIcon} />
                      ) : (
                        <FaChevronRight className={navMenu.chevronIcon} />
                      )}
                    </div>
                    {activeMenu === menuKey && (
                      <div className={navMenu.subMenu}>
                        {menus[menuKey].sections.map((section) => {
                          const SectionIcon = section.icon;
                          return (
                            <div key={section.title}>
                              <div
                                className={navMenu.menuButton}
                                onClick={() =>
                                  handleSectionToggle(section.title)
                                }
                              >
                                <div className="flex items-center">
                                  <SectionIcon />
                                  <span className="ml-2">{section.title}</span>
                                </div>
                                {activeSections[section.title] ? (
                                  <FaChevronDown
                                    className={navMenu.chevronIcon}
                                  />
                                ) : (
                                  <FaChevronRight
                                    className={navMenu.chevronIcon}
                                  />
                                )}
                              </div>
                              {activeSections[section.title] && (
                                <div className={navMenu.subMenu}>
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
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
