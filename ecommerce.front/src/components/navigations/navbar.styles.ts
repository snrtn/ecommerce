const navbar = {
  container:
    "relative px-6 w-full h-30 z-30 md:h-20 bg-white text-black md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  mobileNav:
    "flex flex-col gap-2 h-full bg-white items-center justify-center md:hidden",
  logoText: "text-md md:text-xl font-semibold tracking-wide",
  desktopNav: "hidden gap-8 h-full items-center justify-between md:flex",
  desktopLeft: "flex gap-4 w-1/3 items-center xl:w-1/2",
  desktopCenter: "flex gap-4 w-1/3 items-center xl:w-1/2",
  desktopRight: "flex gap-4 w-1/3 items-end justify-end xl:w-1/2",
  menuContainer: "hidden gap-4 h-full justify-left items-center md:flex",
  menu: "hidden w-full xl:flex",
  menuItem: "block p-4 py-10 hover:text-gray-400 transition-all",
  activeMenuItem: "font-bold",
};

export default navbar;
