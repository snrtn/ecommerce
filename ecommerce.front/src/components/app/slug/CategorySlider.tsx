"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CategorySlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const slides = [
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfe530ea-a07d-46ac-a5a6-1df56d1ae7e5/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-kFMJfZ.png",
      title: "Nike Sportswear Phoenix Fleece",
      price: "$100",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d915f742-ca0a-40e2-8d60-aabaa780e403/sweat-a-capuche-jordan-brooklyn-fleece-pour-H98jKw.png",
      title: "Jordan Brooklyn Fleece",
      price: "$120",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/531e60be-bc61-4497-9974-a4282c70aca6/sweat-a-capuche-a-zip-sportswear-tech-fleece-windrunner-pour-xBvHWX.png",
      title: "Nike Sportswear Tech Fleece Windrunner",
      price: "$150",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f496b2d1-0298-4c1f-922f-bd3e747528c8/sweat-a-col-ras-du-cou-jordan-brooklyn-fleece-pour-Fd8625.png",
      title: "Jordan Brooklyn Fleece",
      price: "$130",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34ea6eda-f46c-4110-900f-8211baaa4f51/veste-sans-manches-oversize-sportswear-phoenix-fleece-pour-ZlJ5mt.png",
      title: "Nike Sportswear Phoenix Fleece",
      price: "$100",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ae104e5-0cc8-47b0-847a-d10e220ca5a9/haut-court-a-col-en-v-sportswear-phoenix-fleece-pour-pTjJQz.png",
      title: "Nike Sportswear Phoenix Fleece",
      price: "$120",
    },
  ];

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
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
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
    <div className="relative w-full pr-4 pt-40 md:pr-0">
      <div className="flex items-center justify-between px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-lg font-semibold">All Sweats</h2>
        <div className="hidden md:flex">
          <button
            onClick={prevSlide}
            className={`p-2 text-gray-500 ${isAtStart ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isAtStart}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 text-gray-500 ${isAtEnd ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isAtEnd}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div className="flex pr-5 md:hidden">
          <Image
            src="/fingerScroll.png"
            width={30}
            height={30}
            alt="fingerScroll.png"
          />
        </div>
      </div>
      <div
        ref={containerRef}
        className="no-scrollbar flex overflow-x-auto scroll-smooth pl-4 pt-10 md:pl-0"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mr-0 flex-shrink-0 cursor-pointer pl-4 md:mr-2 md:px-0 ${
              index === 0
                ? "invisible hidden w-4 md:!mr-0 md:flex md:w-8 lg:w-16 xl:w-32 2xl:w-64"
                : ""
            } flex flex-col overflow-hidden`}
          >
            <div className="relative h-[60vh] w-[48vh] md:w-[50vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                className="h-full w-full"
                fill
              />
              <div className="w-full bg-white bg-opacity-75 p-2"></div>
            </div>
            <h3 className="text-md mt-2">{slide.title}</h3>
            <p className="mt-1 text-sm">{slide.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
