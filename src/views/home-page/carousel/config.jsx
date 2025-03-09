export const PrevArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

// Flecha personalizada "siguiente" (como función)
export const NextArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export const customTheme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <>
            {!loop && firstIndex && (
              <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 -left-7 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
              >
                <PrevArrow strokeWidth={3} className="-ml-1 h-7 w-7" />
              </button>
            )}
          </>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <>
          {!loop && lastIndex && (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="!absolute top-2/4 -right-7 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <NextArrow strokeWidth={3} className="ml-1 h-7 w-7" />
            </button>
          )}
        </>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-full",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },
        slide: {
          width: "w-full",
          height: "h-full",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};
