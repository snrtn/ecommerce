const navbar = {
  container:
    "relative w-full z-30 h-36 md:h-20 bg-white px-6 text-black md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  mobileNav:
    "flex flex-col bg-white gap-6 h-full items-center justify-center md:hidden",
  logoText: "text-md md:text-xl font-semibold tracking-wide",
  desktopNav: "hidden h-full items-center justify-between gap-8 md:flex",
  desktopLeft: "flex w-1/3 items-center gap-4 xl:w-1/2",
  desktopCenter: "flex w-1/3 items-center gap-4 xl:w-1/2",
  desktopRight: "flex w-1/3 items-end justify-end gap-4 xl:w-1/2",
  menuContainer: "justify-left hidden h-full items-center gap-4 md:flex",
  menu: "hidden w-full xl:flex",
  menuItem: "block p-4 hover:text-gray-400 transition-all py-10",
  activeMenuItem: "font-bold",
};

export default navbar;
