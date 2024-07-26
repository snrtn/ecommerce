const navMenu = {
  container: "relative",
  menuIcon: "p-4 text-lg md:text-xl cursor-pointer",
  menuOpen: "flex fixed inset-0 z-50",
  overlay: "fixed inset-0 bg-black bg-opacity-50",
  closeButton: "absolute top-4 right-4 cursor-pointer",
  menuContent:
    "flex flex-col relative p-10 w-[80%] h-full z-10 bg-white md:w-[30%] overflow-y-auto",
  welcomeMessage: "flex mb-4 justify-between items-center",
  menuButton: "flex py-4 justify-between items-center cursor-pointer",
  chevronIcon: "ml-2",
  subMenu: "p-4",
  sectionItem: "block py-2",
};

export default navMenu;
