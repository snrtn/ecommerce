const group = {
  container: "relative w-full py-0 pb-0 pt-40 md:py-40",
  header: "flex justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  headerTitle: "text-xl font-bold",
  headerSubtitle: "mt-4 text-sm",
  controlsContainer:
    "mt-10 flex items-end justify-end px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  fingerScroll: "flex pr-5 md:hidden",
  buttonContainer: "hidden md:flex",
  button: "mx-2 p-2",
  buttonDisabled: "cursor-not-allowed opacity-50",
  slideContainer: "no-scrollbar flex overflow-x-auto scroll-smooth py-2",
  slide: "flex-shrink-0 flex flex-col overflow-hidden md:flex-row",
  invisibleSlide: "invisible mx-[-8px] w-4 md:w-8 lg:w-16 xl:w-32 2xl:w-64",
  mainImageContainer: "group relative h-[50vh] w-[50vh] p-4 md:h-[70vh]",
  mainImage:
    "h-full w-full rounded-lg object-cover transition duration-300 group-hover:opacity-70",
  overlay:
    "absolute inset-0 flex cursor-pointer items-center justify-center bg-white bg-opacity-10 opacity-0 transition duration-300 group-hover:opacity-100",
  overlayIcon: "text-3xl text-black",
  subImageContainer:
    "flex h-[55vh] md:h-[70vh] w-[50vh] md:w-[30vh] md:flex-col",
  subImage: "group relative h-1/2 w-full overflow-hidden p-4",
  subImageContent:
    "h-full w-full rounded-lg object-contain transition duration-300 group-hover:opacity-70 md:object-cover",
};

export default group;
