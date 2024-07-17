const slideView = {
  container: "relative h-[90vh] md:h-[82vh] w-full",
  slideLink: "absolute inset-0 flex items-center justify-center",
  slideContent:
    "relative flex h-full w-full items-start md:items-center justify-center pt-4 md:pt-0",
  imageWrapper: "relative h-full w-full",
  slideImage: "h-full w-full object-cover",
  darkOverlay: "absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-30",
  slideOverlay:
    "absolute inset-0 flex flex-col items-center text-center md:text-left md:items-start justify-end py-48 md:py-0 md:justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  slideTitle: "text-xl md:text-3xl font-bold text-white",
  slideDescription: "mt-4 text-xs md:text-lg text-white w-64 md:w-full",
  slideTexts:
    "py-10 text-xs md:text-base font-semibold text-white hidden md:flex",
};

export default slideView;
