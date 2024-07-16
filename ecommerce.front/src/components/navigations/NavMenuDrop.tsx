import Link from "next/link";
import { UrlObject } from "url";
import { Key, ReactNode } from "react";
import navMenuDrop from "./navMenuDrop.styles";

interface MenuItem {
  href: string | UrlObject;
  label: ReactNode;
}

interface Section {
  title: string;
  items: MenuItem[];
}

interface NavMenuDropProps {
  sections: Section[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavMenuDrop = ({
  sections,
  onMouseEnter,
  onMouseLeave,
}: NavMenuDropProps) => {
  return (
    <div
      className={navMenuDrop.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={navMenuDrop.innerContainer}>
        <div className={navMenuDrop.sectionContainer}>
          {sections.map((section, index: Key) => (
            <div key={index} className={navMenuDrop.section}>
              <h3 className={navMenuDrop.sectionTitle}>{section.title}</h3>
              {section.items.map((item, itemIndex: Key) => (
                <Link
                  href={item.href}
                  key={itemIndex}
                  className={navMenuDrop.item}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenuDrop;
