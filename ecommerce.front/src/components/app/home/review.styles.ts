const review = {
  container: "relative w-full overflow-hidden",
  header: "px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  title: "text-xl font-semibold",
  categories: "no-scrollbar flex gap-4 space-x-4 overflow-x-auto py-8",
  categoryLink:
    "relative flex text-sm font-normal transition-transform duration-300",
  scrollContainer: "no-scrollbar flex overflow-x-auto scroll-smooth py-4",
  slide: "flex-shrink-0 relative mx-2 overflow-hidden rounded-lg group",
  hiddenSlide: "hidden lg:block",
  oddSlide: "h-[50vh] w-[35vh]",
  evenSlide: "h-[55vh] w-[35vh]",
  firstSlide: "mx-[-5px] w-4 md:w-8 lg:w-16 xl:w-32 2xl:w-64",
  image: "h-full w-full object-cover transition group-hover:opacity-80",
  overlay:
    "from-black/30 to-transparent duration-400 absolute bottom-0 left-0 right-0 flex h-[50vh] cursor-pointer items-end justify-center bg-gradient-to-t p-8 text-white transition-all group-hover:from-black/80 group-hover:items-center",
  overlayText:
    "duration-400 transform text-center transition-transform group-hover:translate-y-[-50%]",
};

export default review;
