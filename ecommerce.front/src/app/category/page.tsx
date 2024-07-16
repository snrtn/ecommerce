"use client";

import { useState, useEffect, ChangeEvent } from "react";
import FilterSection from "@/components/app/category/FilterSection";
import ProductCard from "@/components/app/category/ProductCard";
import { FaFilter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const CategoryPage = () => {
  const [filters, setFilters] = useState({
    sort: "price_asc",
    minPrice: "",
    maxPrice: "",
  });

  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 884);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 884);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleFilterChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const initialProducts = Array(100)
    .fill(null)
    .map((_, index) => ({
      name: `Nike Air Force 1 '07 Next Nature ${index + 1}`,
      colors: ["#75A69C", "#ffffff"],
      sizes: ["36", "38", "40", "42", "44", "46", "48"],
      price: "119,99 €",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2191281b-f695-4c03-94a3-30bbf724633a/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26a7739d-00c8-454b-bb86-2f2ff912d279/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26e02a08-0b30-43ee-a8cf-b22cb459031f/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60a58d15-6276-4a3b-995a-bb328f539dd8/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/666c4985-5a55-4525-b128-ae5f76a617e3/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      ],
    }));

  const itemsPerPage = isMobile ? 14 : 15;
  const totalPages = Math.ceil(initialProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = initialProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`mx-4 px-2 py-1 ${currentPage === 1 ? "bg-gray-300" : ""}`}
      >
        1
      </button>,
    );

    if (currentPage > 3) {
      pageNumbers.push(
        <span key="dots1" className="mx-4">
          ...
        </span>,
      );
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-4 px-2 py-1 ${currentPage === i ? "bg-gray-300" : ""}`}
        >
          {i}
        </button>,
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <span key="dots2" className="mx-4">
          ...
        </span>,
      );
    }

    pageNumbers.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`mx-4 px-2 py-1 ${currentPage === totalPages ? "bg-gray-300" : ""}`}
      >
        {totalPages}
      </button>,
    );

    return pageNumbers;
  };

  return (
    <div className="mt-0 flex flex-col-reverse xl:mt-20 xl:flex-row">
      <div
        className={`xl:block ${showFilters ? "block" : "hidden"} sticky top-20 xl:w-1/6`}
      >
        <FilterSection
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="xl:w-4/4 w-full p-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Chaussures Air Force 1 (98)</h2>
          <div className="xl:hidden">
            {showFilters === false ? (
              <button onClick={toggleFilters} className="p-2">
                <FaFilter className="text-xl" />
              </button>
            ) : (
              <button onClick={toggleFilters} className="p-2">
                <AiOutlineClose className="text-2xl" />
              </button>
            )}
          </div>
        </div>
        {showFilters && isMobile && (
          <div className="fixed inset-0 top-36 z-50 overflow-y-auto bg-white">
            <FilterSection
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">{renderPageNumbers()}</div>
      </div>
    </div>
  );
};

export default CategoryPage;
