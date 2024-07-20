"use client";
import Image from "next/image";
import styles from "./slider.module.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: { src: string; alt: string }[];
}

export const Slider = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (index: number) => {
    setCurrentSlide(index);
    sliderRef.current?.scrollTo({
      left: sliderRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", onScroll);
      return () => {
        slider.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider} ref={sliderRef}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1600}
            height={900}
          />
        ))}
      </div>
      <ul className={styles.nav}>
        {images.map((_, index) => (
          <li
            key={index}
            className={currentSlide === index ? styles.active : ""}
            onClick={() => handleScroll(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
