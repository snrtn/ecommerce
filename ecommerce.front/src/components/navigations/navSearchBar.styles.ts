const navSearchBar = {
  container: "flex w-full overflow-y-auto md:w-full justify-center",
  form: "flex px-4 py-2 w-[80vw] border border-transparent items-center justify-between bg-gray-100 rounded-md md:w-[30vw] focus-within:border-black transition-colors",
  input: "flex-1 bg-transparent text-sm md:text-md outline-none",
  clearButton: "flex items-center cursor-pointer",
  searchButton: "flex items-center cursor-pointer",
  dropdown:
    "absolute top-28 right-0 left-0 pb-16 px-4 py-4 shadow-lg md:pb-10 md:top-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white text-sm z-20",
  suggestionsContainer: "pb-4",
  categoryTitle: "px-5 py-4 font-semibold text-lg",
  categoryLink: "hover:underline",
  suggestionList: "max-h-40 md:max-h-60 overflow-y-auto",
  suggestionItem:
    "flex gap-4 px-6 py-4 items-center hover:bg-gray-100 cursor-pointer",
  suggestionImage: "w-20 h-20 object-cover",
  suggestionDetails:
    "flex flex-col w-full md:flex-row items-start md:items-center justify-between",
  suggestionName: "flex-1 text-sm font-medium",
  suggestionInfo: "flex-1 flex flex-col gap-0 md:flex-row md:gap-36",
  suggestionColors: "text-xs text-gray-500",
  suggestionSizes: "text-xs text-gray-500",
  suggestionPrice: "text-sm font-semibold",
  viewAll: "flex mt-4 justify-center",
  viewAllLink: "text-blue-500 text-xs hover:underline",
};

export default navSearchBar;
