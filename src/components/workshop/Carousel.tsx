import { useState } from 'react';
import './Carousel.scss';

export interface CarouselSlide {
  title: string;
  description: string;
  highlight: string;
}

interface CarouselProps {
  label: string;
  slides: CarouselSlide[];
}

export function Carousel({ label, slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="carousel"
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
    >
      <div className="carousel__controls">
        <button
          className="carousel__btn"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ← Previous
        </button>
        <span className="carousel__indicator">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          className="carousel__btn"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          Next →
        </button>
      </div>

      <div
        className="carousel__slide"
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}`}
      >
        <span className="carousel__highlight">
          {slides[currentSlide].highlight}
        </span>
        <h4 className="carousel__slide-title">
          {slides[currentSlide].title}
        </h4>
        <p>{slides[currentSlide].description}</p>
      </div>

      <div className="carousel__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`carousel__dot${index === currentSlide ? ' carousel__dot--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={index === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
