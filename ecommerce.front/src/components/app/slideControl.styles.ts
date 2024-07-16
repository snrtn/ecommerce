const slideControl = {
  container:
    "z-5 absolute bottom-0 left-0 right-0 flex flex-col items-center overflow-y-hidden bg-white p-6 md:p-2 md:py-4",
  controlWrapper:
    "flex w-full items-center justify-between px-0 md:px-8 lg:px-16 xl:px-32 2xl:px-64",
  controlGroup: "flex items-center rounded-full",
  slideInfo: "mr-0 flex items-center justify-center text-gray-700 md:mr-2",
  slideNumber: "text-xl",
  slashIcon: "mx-0 text-xs md:mx-2",
  controlButton: "mx-2 text-gray-700 md:mx-3",
  chevronIcon: "text-xl",
  playPauseIcon: "text-lg",
  slideContainer: "no-scrollbar ml-2 flex space-x-2 overflow-x-auto md:ml-4",
  slideButton:
    "flex-shrink-0 cursor-pointer px-4 py-2 text-xs md:text-base rounded-full",
  activeSlide: "active-slide bg-black text-white",
  inactiveSlide: "bg-gray-200 text-gray-700",
};

export default slideControl;
