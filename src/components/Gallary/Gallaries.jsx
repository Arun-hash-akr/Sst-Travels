import React, { useState, useEffect, useRef } from "react";
import "./Gallary.css";

import van3 from "../Gallary/Images/van3.jpg";
import van4 from "../Gallary/Images/van4.jpg";
import van5 from "../Gallary/Images/van5.jpg";
import van6 from "../Gallary/Images/van6.jpg";
import van7 from "../Gallary/Images/van7.jpg";
import van8 from "../Gallary/Images/van8.jpg";
import van9 from "../Gallary/Images/van9.jpg";
import van10 from "../Gallary/Images/van10.jpg";

const Gallaries = () => {
  const images = [van3, van4, van5, van6, van7, van8, van9, van10];

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Update Position
  useEffect(() => {
    if (trackRef.current && carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      trackRef.current.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
    }
  }, [currentIndex]);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current && carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        trackRef.current.style.transform = `translateX(-${
          currentIndex * width
        }px)`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  // Swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const diff = e.touches[0].clientX - startX.current;
    const width = carouselRef.current.offsetWidth;

    trackRef.current.style.transform = `translateX(${
      -currentIndex * width + diff
    }px)`;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      const width = carouselRef.current.offsetWidth;
      trackRef.current.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
    }

    isDragging.current = false;
  };

  return (
    <section className="Gallary">
      <h3>Gallery</h3>

      <div className="carousel" ref={carouselRef}>
        <div
          className="carousel-track"
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="prev" onClick={prevSlide}>
          ❮
        </button>

        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Gallaries;