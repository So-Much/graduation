'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const Slider = ({ children, totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer backdrop-blur-sm border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-800 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer backdrop-blur-sm border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-800 transition-colors" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? 'bg-blue-800 scale-110 shadow-lg'
                : 'bg-white/70 hover:bg-white/90 hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <Circle className={`w-2 h-2 ${
              currentSlide === index ? 'text-white' : 'text-slate-500'
            }`} />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-800 to-amber-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl border border-white/20">
        <span className="text-sm font-medium text-slate-700">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default Slider;
