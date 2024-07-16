"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import footer from "./footer.styles";

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.innerContainer}>
        <div className={footer.logoContainer}>
          <Link href="/">
            <div className={footer.logoText}>KIM</div>
          </Link>
          <div className={footer.addressContainer}>
            <p>Av. Gustave Eiffel, 75007 Paris</p>
            <span className={footer.email}>hanjun.kim.dev@gmail.com</span>
          </div>
        </div>
        <div className={footer.linksContainer}>
          <div className={footer.linkSection}>
            <h1 className={footer.linkSectionTitle}>About</h1>
            <div className={footer.linkList}>
              <Link href="">Blog</Link>
            </div>
          </div>
          <div className={footer.linkSection}>
            <h1 className={footer.linkSectionTitle}>SHOP</h1>
            <div className={footer.linkList}>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
            </div>
          </div>
        </div>

        <div className={footer.contactContainer}>
          <div className="flex">
            <button className={footer.contactButton}>Contact</button>
          </div>
          <div className={footer.socialIcons}>
            <FaFacebookF size={20} />
            <FaInstagram size={22} />
          </div>
        </div>
      </div>

      <div className={footer.footerBottom}>
        <div className={footer.copyright}>© 2024 KIM</div>
      </div>
    </div>
  );
};

export default Footer;
