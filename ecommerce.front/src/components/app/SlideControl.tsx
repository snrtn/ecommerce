"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import slideControl from "./slideControl.styles";

interface SlideControlProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
  slides: { title: string; description: string }[];
  setSlide: (index: number) => void;
}

const SlideControl: React.FC<SlideControlProps> = ({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  togglePlay,
  isPlaying,
  slides,
  setSlide,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustScrollPosition = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const activeSlide = container.querySelector(
        ".active-slide",
      ) as HTMLElement;
      if (activeSlide) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeSlide.getBoundingClientRect();
        const scrollLeft =
          container.scrollLeft +
          (activeRect.left - containerRect.left) -
          containerRect.width / 2 +
          activeRect.width / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentSlide]);

  useEffect(() => {
    adjustScrollPosition();
  }, [currentSlide, adjustScrollPosition]);

  return (
    <div className={slideControl.container}>
      <div className={slideControl.controlWrapper}>
        <div className={slideControl.controlGroup}>
          <div className={slideControl.slideInfo}>
            <span className={slideControl.slideNumber}>{currentSlide + 1}</span>
            <span>
              <RxSlash className={slideControl.slashIcon} />
            </span>
            {totalSlides}
          </div>
          <button onClick={prevSlide} className={slideControl.controlButton}>
            <FaChevronLeft className={slideControl.chevronIcon} />
          </button>
          <button onClick={togglePlay} className={slideControl.controlButton}>
            {isPlaying ? (
              <FaPause className={slideControl.playPauseIcon} />
            ) : (
              <FaPlay className={slideControl.chevronIcon} />
            )}
          </button>
          <button onClick={nextSlide} className={slideControl.controlButton}>
            <FaChevronRight className={slideControl.chevronIcon} />
          </button>
        </div>
        <div ref={containerRef} className={slideControl.slideContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${slideControl.slideButton} ${
                index === currentSlide
                  ? slideControl.activeSlide
                  : slideControl.inactiveSlide
              }`}
              onClick={() => setSlide(index)}
            >
              {slide.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideControl;
