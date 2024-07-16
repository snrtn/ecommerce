"use client";

import React from "react";
import banner from "./bannerView.styles";
import Image from "next/image";

const BannerView = () => {
  return (
    <div className={banner.container}>
      <div className={banner.banner}>
        <div className={banner.textContainer}>
          <h1 className={banner.heading}>Explore a new style</h1>
          <h2 className={banner.heading}>with the best discount offers!</h2>
          <div className="mt-4">
            <p className={banner.paragraph}>
              Don't miss the special opportunity
            </p>
            <p className={banner.paragraph}>
              to enhance your fashion world at the same time.
            </p>
          </div>
        </div>
        <div className={banner.imageContainer}>
          <Image
            src="/bicycle.svg"
            alt="Fashion Model"
            className={`${banner.image} !h-40`}
            width={100}
            height={100}
          />
          <Image
            src="/banner.svg"
            alt="Fashion Model"
            className={banner.image}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerView;
