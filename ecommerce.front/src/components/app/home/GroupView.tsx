"use client";

import React, { FC, useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
import group from "./groupView.styles";

// test datas
import slides from "./groupView.data";

const GroupView: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const nextSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 3,
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
    <div className={group.container}>
      <div className={group.header}>
        <div>
          <h2 className={group.headerTitle}>Discover Your Style</h2>
          <p className={group.headerSubtitle}>
            Explore Our Curated Fashion Collections
          </p>
        </div>
      </div>
      <div className={group.controlsContainer}>
        <div className={group.fingerScroll}>
          <Image
            src="/fingerScroll.png"
            alt="fingerScroll.png"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className={group.buttonContainer}>
          <button
            onClick={prevSlide}
            className={`${group.button} ${
              isAtStart ? group.buttonDisabled : ""
            }`}
            disabled={isAtStart}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className={`${group.button} ${isAtEnd ? group.buttonDisabled : ""}`}
            disabled={isAtEnd}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div ref={containerRef} className={group.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${group.slide} ${
              index === 0 || index === slides.length - 1
                ? group.invisibleSlide
                : index % 2 === 0
                  ? group.evenSlide
                  : group.oddSlide
            }`}
          >
            <div className={group.mainImageContainer}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.image}
                  className={group.mainImage}
                  width={400}
                  height={600}
                  priority
                />
                <div className={group.overlay}>
                  <FaSearchPlus className={group.overlayIcon} />
                </div>
              </div>
            </div>
            <div className={group.subImageContainer}>
              <div className={group.subImage}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.images[0]}
                    alt={slide.image}
                    className={group.subImageContent}
                    width={400}
                    height={600}
                    priority
                  />
                  <div className={group.overlay}>
                    <FaSearchPlus className={group.overlayIcon} />
                  </div>
                </div>
              </div>
              <div className={group.subImage}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.images[1]}
                    alt={slide.image}
                    className={group.subImageContent}
                    width={400}
                    height={600}
                    priority
                  />
                  <div className={group.overlay}>
                    <FaSearchPlus className={group.overlayIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupView;
