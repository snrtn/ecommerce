const itemView = {
  container: "relative w-full bg-gray-100 overflow-hidden pt-40 pb-20 md:py-40",
  header: "px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  title: "text-xl font-bold",
  description: "text-sm mt-4",
  scrollContainer: "flex overflow-x-auto scroll-smooth py-16 no-scrollbar",
  slide: "flex-shrink-0 rounded-lg overflow-hidden mx-2 relative group",
  hiddenSlide: "hidden lg:block",
  firstSlide: "w-4 md:w-8 lg:w-16 xl:w-32 2xl:w-64 mx-[-5px]",
  evenSlide: "h-[55vh] w-[35vh]",
  oddSlide: "h-[50vh] w-[35vh]",
  image: "w-full h-full object-cover transition group-hover:opacity-80",
  overlay:
    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white-200 to-transparent h-[50vh] text-white p-8 flex justify-center items-end transition-all duration-400 group-hover:items-center group-hover:bg-opacity-50 group-hover:from-black cursor-pointer",
  overlayText:
    "text-center transition-transform duration-400 transform group-hover:translate-y-[-50%]",
};

export default itemView;
