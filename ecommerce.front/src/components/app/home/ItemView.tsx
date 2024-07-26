"use client";

import React, { useRef, useState, useEffect } from "react";
import ItemControl from "./ItemControl";
import Image from "next/image";
import itemView from "./itemView.styles";

// text data
import { slides } from "./itemView.data";

const ItemView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const nextSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -(containerRef.current.clientWidth / 4),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={itemView.container}>
      <div className={itemView.header}>
        <h2 className={itemView.title}>Style starts here</h2>
        <p className={itemView.description}>
          Discover the latest trends and elevate your wardrobe with our curated
          selections.
        </p>
      </div>
      <div ref={containerRef} className={itemView.scrollContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${itemView.slide} ${
              index === 0
                ? itemView.firstSlide
                : index % 2 === 0
                  ? itemView.evenSlide
                  : itemView.oddSlide
            } ${index === 0 || index === slides.length - 1 ? itemView.hiddenSlide : ""}`}
          >
            {slide.image && (
              <>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className={itemView.image}
                  priority
                  width={400}
                  height={600}
                />
                <div className={itemView.overlay}>
                  <h3 className={itemView.overlayText}>{slide.title}</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <ItemControl
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        isAtStart={isAtStart}
        isAtEnd={isAtEnd}
      />
    </div>
  );
};

export default ItemView;
