"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import CategorySlider from "@/components/app/slug/CategorySlider";
import Image from "next/image";

const SinglePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 884);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const images = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2191281b-f695-4c03-94a3-30bbf724633a/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26a7739d-00c8-454b-bb86-2f2ff912d279/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26e02a08-0b30-43ee-a8cf-b22cb459031f/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/666c4985-5a55-4525-b128-ae5f76a617e3/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60a58d15-6276-4a3b-995a-bb328f539dd8/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
  ];

  const initialImages = images.slice(0, 4);
  const moreImages = images.slice(4);

  const handleShowMoreImages = () => {
    setShowMoreImages(true);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const colors = [
    { color: "#75A69C", checkColor: "black" },
    { color: "#ffffff", checkColor: "black" },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="mt-8 px-8 md:mt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <nav className="breadcrumb flex items-center">
          <div className="mr-6 flex cursor-pointer items-center">
            <IoIosArrowBack size={18} className="mr-1" />{" "}
            <span className="text-xs">Return</span>
          </div>
          <div className="flex gap-2 text-xs text-gray-500">
            <a href="/" className="ml-4">
              Accueil
            </a>{" "}
            / <a href="/originals">Woman</a> / <a href="/chaussures">Sweat</a>
          </div>
        </nav>

        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} mt-6`}>
          {isMobile ? (
            <div className="relative w-full">
              <div className="overflow-hidden">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`relative h-[528px] w-full transition-transform ${
                      index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                    style={{
                      display: index === currentSlide ? "block" : "none",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Product Image ${index + 1}`}
                      className="h-full w-full"
                      width={500}
                      height={700}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 transform items-center justify-between">
                <button
                  onClick={handlePrevSlide}
                  className="text-gray absolute left-0 h-full w-1/2 p-2"
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-0 h-full w-1/2 p-2 text-black"
                >
                  <IoIosArrowForward
                    size={20}
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                  />
                </button>
              </div>
              <div className="mt-2 flex justify-center">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`mx-1 h-2 w-2 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid h-full w-2/3 grid-cols-2 gap-2">
              {initialImages.map((src, index) => (
                <div key={index} className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`Product Image ${index + 1}`}
                    className="h-auto w-full"
                    width={300}
                    height={400}
                  />
                </div>
              ))}
              {showMoreImages &&
                moreImages.map((src, index) => (
                  <div key={index} className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`Product Image ${index + 5}`}
                      className="h-auto w-full"
                      width={300}
                      height={400}
                    />
                  </div>
                ))}
              {!showMoreImages && (
                <button
                  className="text-md col-span-2 h-20 bg-gray-100 p-4 text-center"
                  onClick={handleShowMoreImages}
                >
                  See more
                </button>
              )}
            </div>
          )}
          <div className={`${isMobile ? "mt-6 w-full" : "w-1/3 pl-6"}`}>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">
                Balconette Swimsuit Top Shiny Satin
              </h1>
              <p className="text-md mt-2 text-gray-700">$60.00</p>
              <span className="text-md mt-6 font-medium">Color</span>
              <div className="mt-2 grid grid-cols-8 gap-2">
                {colors.map((colorObj, index) => (
                  <div
                    key={index}
                    className={
                      "relative h-9 w-9 cursor-pointer rounded-full border-2 border-gray-200"
                    }
                    style={{ backgroundColor: colorObj.color }}
                    onClick={() => handleColorClick(colorObj.color)}
                  >
                    {selectedColor === colorObj.color && (
                      <span
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color: colorObj.checkColor }}
                      >
                        <FaCheck size={20} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <span className="text-md mt-8 font-medium">Sizes</span>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {["36", "38", "40", "42", "44", "46", "48"].map((size) => (
                  <button
                    key={size}
                    className={`border p-4 ${selectedSize === size ? "bg-black text-white" : ""}`}
                    onClick={() => handleSizeClick(size)}
                    disabled={size === "37 ⅓"}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="mt-2 text-sm underline">
                Guide des tailles
              </a>

              <div className="flex items-center justify-between py-4">
                <span></span>
                <div className="flex items-center gap-6">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="flex h-14 w-14 items-center justify-center text-2xl font-bold"
                  >
                    −
                  </button>
                  <span className="text-md w-6 text-center">{quantity}</span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="flex h-14 w-14 items-center justify-center text-2xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="w-full bg-black p-3 text-white">
                ADD TO CART
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-500 underline">
                Shipping is always free for orders over $60
              </a>
              <a href="#" className="text-sm text-gray-500 underline">
                Returns are always free for Calzedonia Lover members
              </a>
            </div>
            <div className="mt-10 gap-2 border-t pt-10">
              <h2 className="mb-4 text-lg font-medium">Description</h2>
              <p className="text-sm font-normal">
                Style et confort pour toutes tes tenues : découvre notre ligne
                loungewear haut de gamme. Ce sweat classique te tient chaud
                toute la journée, avec son tissu Fleece d`épaisseur moyenne,
                doux et structuré. Avec ses côtes hautes et sa coupe oversize,
                ton look aura de quoi se démarquer.
              </p>
              <div className="mt-5 flex items-center gap-6">
                <div className="w-2 bg-black">.</div>
                <p className="text-sm">The model is wearing size 38</p>
              </div>
            </div>
            <div className="mt-10 gap-2 border-t pt-10">
              <h2 className="mb-2 text-lg font-medium">Composition and care</h2>
              <p className="text-md">73 % Polyamide</p>
              <p className="text-md">27 % Elastane</p>
              <p className="mt-4 text-sm font-normal">
                Machine wash cold with like colors
              </p>
            </div>
          </div>
        </div>
      </div>
      <CategorySlider />
    </div>
  );
};

export default SinglePage;
