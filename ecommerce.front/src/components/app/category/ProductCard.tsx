"use client";

import Link from "next/link";
import { FC, useState } from "react";

interface Product {
  name: string;
  colors: string[];
  sizes: string[];
  price: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMainImage(product.images[0]); // 마우스 오버가 끝나면 원래 이미지로 돌아옴
  };

  return (
    <Link href={"/slug"}>
      <div
        className="relative box-border cursor-pointer text-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={mainImage}
          alt={product.name}
          className="mb-4 h-60 w-full object-cover md:h-96"
        />
        {isHovered && window.innerWidth > 884 ? ( // 태블릿 이상에서는 비활성화
          <div className="bg-white p-4">
            <div className="no-scrollbar mb-2 flex gap-2 overflow-x-auto">
              {product.images.slice(1, 5).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${product.name} ${idx}`}
                  className="h-12 w-12 cursor-pointer object-cover"
                  onMouseOver={() => setMainImage(image)}
                />
              ))}
            </div>
            <p className="mt-4 text-sm font-medium">{product.price}</p>
          </div>
        ) : (
          <div className="p-2 md:p-4">
            <p className="text-sm font-medium">{product.name}</p>
            <p className="mt-1 text-xs text-gray-500">
              {product.colors.length} colors
            </p>
            <p className="mt-6 text-sm font-medium">{product.price}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
