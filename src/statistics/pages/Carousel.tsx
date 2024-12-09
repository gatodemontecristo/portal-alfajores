import React, { useRef, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newIndex = Math.min(
        currentIndex + 1,
        React.Children.count(children) - 1,
      );
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {isMobile && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 bg-opacity-60 hover:bg-gray-400 rounded z-50"
          >
            <i className="bi bi-chevron-double-left"></i>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 bg-opacity-60 hover:bg-gray-400 rounded  z-50"
          >
            <i className="bi bi-chevron-double-right  "></i>
          </button>
        </>
      )}
      <div
        ref={carouselRef}
        className={`w-full flex flex-row pt-[20px] md:pt-[40px] h-[80vh] ${isMobile ? 'overflow-x-hidden snap-x snap-mandatory' : ''}`}
      >
        {React.Children.map(children, (child, index) =>
          isMobile ? (
            <div
              className={`w-full h-full relative flex-shrink-0 snap-center  transition-transform duration-500 ease-in-out transform ${isMobile && index === currentIndex ? 'scale-100' : 'scale-95'}`}
              key={nanoid()}
            >
              {child}
            </div>
          ) : (
            <> {child}</>
          ),
        )}
      </div>
    </>
  );
};

export default Carousel;
