"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import itemControl from "./itemControl.styles";

interface ItemControlProps {
  nextSlide: () => void;
  prevSlide: () => void;
  isAtStart: boolean;
  isAtEnd: boolean;
}

const ItemControl: React.FC<ItemControlProps> = ({
  nextSlide,
  prevSlide,
  isAtStart,
  isAtEnd,
}) => {
  return (
    <div className={itemControl.container}>
      <button
        onClick={prevSlide}
        className={`${itemControl.button} ${isAtStart ? itemControl.disabledButton : ""}`}
        disabled={isAtStart}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`${itemControl.button} ${isAtEnd ? itemControl.disabledButton : ""}`}
        disabled={isAtEnd}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ItemControl;
