"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBack2Fill } from "react-icons/ri";
import navSearchBar from "./navSearchBar.styles";
import { fetchedSuggestions } from "./navSearchBar.data";
import { Suggestions } from "./navSearchBar.types";
import Image from "next/image";

const NavSearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestions>({
    hommes: [],
    femmes: [],
  });
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setSearchTerm("");
          setShowDropdown(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/list?name=${searchTerm}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSuggestions(fetchedSuggestions);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setShowDropdown(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowDropdown(false);
    router.push(`/list?name=${suggestion}`);
  };

  const renderSuggestions = (
    category: string,
    items: { name: string; colors: string[]; sizes: string[]; price: string }[],
  ) => (
    <div className={navSearchBar.suggestionsContainer}>
      <h3 className={navSearchBar.categoryTitle}>
        <a
          href={`/list?category=${category.toLowerCase()}`}
          className={navSearchBar.categoryLink}
        >
          {category} ({items.length})
        </a>
      </h3>
      <div className={navSearchBar.suggestionList}>
        {items.map((item, index) => (
          <div
            key={index}
            className={navSearchBar.suggestionItem}
            onClick={() => handleSuggestionClick(item.name)}
          >
            <div className="relative h-12 w-12">
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png"
                alt={item.name}
                className={navSearchBar.suggestionImage}
                layout="fill"
              />
            </div>
            <div className={navSearchBar.suggestionDetails}>
              <p className={navSearchBar.suggestionName}>{item.name}</p>
              <div className={navSearchBar.suggestionInfo}>
                <p className={navSearchBar.suggestionColors}>
                  Colors: {item.colors.length}
                </p>
                <p className={navSearchBar.suggestionSizes}>
                  Sizes: {item.sizes.length}
                </p>
              </div>
            </div>
            <p className={navSearchBar.suggestionPrice}>{item.price}</p>
          </div>
        ))}
        {items.length > 9 && (
          <div className={navSearchBar.viewAll}>
            <a
              href={`/list?category=${category.toLowerCase()}`}
              className={navSearchBar.viewAllLink}
            >
              View All {category} Results
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={navSearchBar.container}>
      <form className={navSearchBar.form} onSubmit={handleSearch}>
        <input
          type="text"
          name="name"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
          className={`${navSearchBar.input}`}
        />
        {searchTerm && (
          <button
            type="button"
            className={navSearchBar.clearButton}
            onClick={handleClear}
          >
            <RiDeleteBack2Fill className="mr-2 text-xl text-black md:mr-0" />
          </button>
        )}
        <button className={navSearchBar.searchButton}>
          <CiSearch className="text-xl text-gray-400" />
        </button>
      </form>
      {showDropdown && (
        <div className={navSearchBar.dropdown}>
          {renderSuggestions("Hommes", suggestions.hommes)}
          {renderSuggestions("Femmes", suggestions.femmes)}
        </div>
      )}
    </div>
  );
};

export default NavSearchBar;
