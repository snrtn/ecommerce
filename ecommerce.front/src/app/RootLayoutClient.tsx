"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";
import { useState } from "react";
import SideMenu from "@/components/navigations/SideMenu";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbarAndFooter = pathname !== "/cart";
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      {children}
      {showNavbarAndFooter && <Footer />}
      <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
    </>
  );
}
