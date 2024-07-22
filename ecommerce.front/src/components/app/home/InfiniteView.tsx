"use client";

import React, { useState, useRef, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProductCard from "@/components/app/category/ProductCard";
import infiniteView from "./infiniteView.styles";
import { initialProducts } from "./infiniteView.data";

const InfiniteView: React.FC = () => {
  const loader = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(768);
  const initialItemsToLoad = isMobile ? 14 : 15;
  const [itemsToLoad, setItemsToLoad] = useState(initialItemsToLoad);

  const [items, setItems] = useState(
    initialProducts.slice(0, initialItemsToLoad),
  );

  useEffect(() => {
    setItemsToLoad(isMobile ? 14 : 15);
  }, [isMobile]);

  useEffect(() => {
    setItems(initialProducts.slice(0, itemsToLoad));
  }, [itemsToLoad]);

  const loadMore = () => {
    const additionalItems = isMobile ? 14 : 15;
    setItems((prev) => [
      ...prev,
      ...initialProducts.slice(prev.length, prev.length + additionalItems),
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
