interface CarouselStatusProps {
  currentSlide: number;
  totalSlides: number;
}

export function CarouselStatus({ currentSlide, totalSlides }: CarouselStatusProps) {
  return (
    <p className="pointer-events-none absolute top-[5px] right-2.5 p-[5px] text-base text-white [text-shadow:1px_1px_1px_rgba(0,0,0,0.9)]">
      {currentSlide} of {totalSlides}
    </p>
  );
}
