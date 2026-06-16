'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PictureFrameProps {
  images: string[];
  title: string;
  autoplayInterval?: number;
}

export default function PictureFrame({
  images,
  title,
  autoplayInterval = 3000,
}: PictureFrameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [isAutoplay, images.length, autoplayInterval]);

  if (images.length === 0) {
    return (
      <div className="aspect-video w-full rounded-lg border border-white/20 bg-white/5 flex items-center justify-center">
        <span className="text-sm text-white/50">No images</span>
      </div>
    );
  }

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="group relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${title} - slide ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur transition-all duration-200 hover:bg-white/30 group-hover:opacity-100"
            aria-label="Previous image"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur transition-all duration-200 hover:bg-white/30 group-hover:opacity-100"
            aria-label="Next image"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoplay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Indicator */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
            <div
              className={`h-2 w-2 rounded-full ${
                isAutoplay ? 'bg-green-400' : 'bg-yellow-400'
              }`}
            />
            <span className="text-xs text-white/70">
              {isAutoplay ? 'Auto' : 'Manual'}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
