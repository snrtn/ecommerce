const navMenu = {
  container: "relative z-10",
  menuIcon: "cursor-pointer text-lg md:text-xl",
  menuOpen:
    "fixed inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70",
  overlay: "absolute inset-0 flex justify-end items-start ",
  closeButton: "cursor-pointer m-4",
  menuContent:
    "absolute z-20 left-0 flex h-full w-[80%] flex-col items-left bg-white p-6 shadow-md",
  menuButton:
    "w-full  py-4 text-left font-semibold flex justify-between items-center",
  chevronIcon: "ml-2",
  subMenu: "w-full py-2",
  sectionTitle: "pt-5 pb-2 font-semibold",
  sectionItem: "block w-full border-b py-2 text-left text-sm",
  welcomeMessage: "text-lg font-bold mb-6",
};

export default navMenu;
