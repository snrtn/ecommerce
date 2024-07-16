"use client";

import React, { useState, useEffect } from "react";
import SlideControl from "./SlideControl";
import Image from "next/image";
import Link from "next/link";
import slideView from "./slideView.styles";

// test data
import slides from "./slideView.data";

const SlideView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 4200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const setSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={slideView.container}>
      <Link href={slides[currentSlide].link}>
        <div className={slideView.slideLink}>
          <div className={slideView.slideContent}>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className={slideView.slideImage}
              fill
            />
            <div className={slideView.slideOverlay}>
              <h2 className={slideView.slideTitle}>
                {slides[currentSlide].title}
              </h2>
              <p className={slideView.slideDescription}>
                {slides[currentSlide].description}
              </p>
              <div className={slideView.slideTexts}>
                {slides[currentSlide].texts}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <SlideControl
        currentSlide={currentSlide}
        totalSlides={slides.length}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        slides={slides}
        setSlide={setSlide}
      />
    </div>
  );
};

export default SlideView;
