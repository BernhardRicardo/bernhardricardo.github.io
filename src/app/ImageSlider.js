"use client";
import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 z-10"
        onClick={previousImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 z-10"
        onClick={nextImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Slide images horizontally
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full"
            style={{ flex: "0 0 100%" }}
          >
            <Image
              src={image.img}
              alt="Project Screenshot"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
