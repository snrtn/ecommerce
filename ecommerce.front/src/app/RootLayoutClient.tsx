"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbarAndFooter = pathname !== "/cart";

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      {children}
      {showNavbarAndFooter && <Footer />}
    </>
  );
}
