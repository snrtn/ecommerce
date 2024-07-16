"use client";

import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./category/ProductCard";
import infiniteView from "./infiniteView.styles";

// test data
import { initialProducts } from "./infiniteView.data";

const InfiniteView: React.FC = () => {
  const loader = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState(
    isMobile ? initialProducts.slice(0, 14) : initialProducts.slice(0, 15),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const loadMore = () => {
    const itemsToLoad = isMobile ? 14 : 15;
    setItems((prev) => [
      ...prev,
      ...initialProducts.slice(prev.length, prev.length + itemsToLoad),
    ]);
  };

  return (
    <div className={infiniteView.container}>
      <h2 className={infiniteView.title}>
        Diversity of styles, variety of charm!
      </h2>
      <p className={infiniteView.description}>
        Open a new world of fashion just for you, with diverse collections and
        unique designs.
      </p>
      <div className={infiniteView.grid}>
        {items.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div ref={loader} className={infiniteView.loader}>
        <button className={infiniteView.button} onClick={loadMore}>
          See More
        </button>
      </div>
    </div>
  );
};

export default InfiniteView;
