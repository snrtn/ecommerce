const navSearchBar = {
  container: "w-full overflow-y-auto md:w-full flex justify-center",
  form: "flex items-center justify-between bg-gray-100 py-2 px-4 rounded-md w-[80vw] md:w-[30vw] focus-within:border-black border border-transparent transition-colors",
  input: "flex-1 bg-transparent outline-none text-sm md:text-md",
  clearButton: "cursor-pointer flex items-center",
  searchButton: "cursor-pointer flex items-center",
  dropdown:
    "absolute pb-16 md:pb-10 left-0 right-0 top-32 md:top-20 py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white text-sm z-20 shadow-lg",
  suggestionsContainer: "pb-4",
  categoryTitle: "font-semibold text-lg py-4 px-5",
  categoryLink: "hover:underline",
  suggestionList: "max-h-40 md:max-h-60 overflow-y-auto",
  suggestionItem:
    "flex items-center gap-4 px-6 py-4 hover:bg-gray-100 cursor-pointer",
  suggestionImage: "w-20 h-20 object-cover",
  suggestionDetails:
    "flex flex-col md:flex-row items-start md:items-center justify-between w-full",
  suggestionName: "flex-1 text-sm font-medium",
  suggestionInfo: "flex-1 flex flex-col md:flex-row gap-0 md:gap-36",
  suggestionColors: "text-xs text-gray-500",
  suggestionSizes: "text-xs text-gray-500",
  suggestionPrice: "text-sm font-semibold",
  viewAll: "flex justify-center mt-4",
  viewAllLink: "text-blue-500 text-xs hover:underline",
};

export default navSearchBar;
