/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useRef, useState, useEffect } from "react";
import ItemControl from "./ItemControl";
import Image from "next/image";
import Link from "next/link";
import review from "./review.styles";

// test data
import { slides, categories } from "./review.data";

const Review: React.FC = () => {
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
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // 더 이상 오른쪽으로 갈 수 없을 때 비활성화
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
    <div className={review.container}>
      <div className={review.header}>
        <h2 className={review.title}>Galerie de styles</h2>
        <div className={review.categories}>
          {categories.map((category, index) => (
            <a key={index} href={category.link} className={review.categoryLink}>
              #{category.title}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="invisible text-sm">#{category.title}</span>
              </span>
              <style jsx>{`
                a:hover span {
                  visibility: visible;
                  font-weight: bold;
                }
              `}</style>
            </a>
          ))}
        </div>
      </div>
      <div ref={containerRef} className={review.scrollContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${review.slide} ${
              index === 0
                ? review.firstSlide
                : index % 2 === 0
                  ? review.evenSlide
                  : review.oddSlide
            } ${index === 0 || index === slides.length - 1 ? review.hiddenSlide : ""}`}
          >
            {slide.image && (
              <Link href={"/review"}>
                <Image
                  src={slide.image}
                  alt={slide.image}
                  className={review.image}
                  width={400}
                  height={600}
                  priority
                />
                <div className={review.overlay}>
                  <h3 className={review.overlayText}>
                    {slide.items[0]}, {slide.items.length - 1} more items
                  </h3>
                </div>
              </Link>
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

export default Review;
