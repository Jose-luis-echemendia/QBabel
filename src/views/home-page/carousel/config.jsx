
export const PrevArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

// Flecha personalizada "siguiente" (como función)
export const NextArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const customNavigation = ({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute -bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2.5">
    {new Array(length).fill("").map((_, i) => (
      <span
        key={i}
        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
          activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray-300"
        }`}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </div>
);

export const customTheme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <>
            {!(!loop && firstIndex) && (
              <button
                onClick={handlePrev}
                className="!absolute shadow-2xl top-2/4 left-0 -translate-y-2/4 rounded-full select-none transition-all w-10 max-w-[48px] h-10 max-h-[48px] bg-gray-3s00 hover:bg-gray-400 active:bg-white/30 grid place-items-center"
              >
                <PrevArrow strokeWidth={3} className="-ml-1 h-7 w-7" />
              </button>
            )}
          </>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <>
          {!(!loop && lastIndex) && (
            <button
              onClick={handleNext}
              className="!absolute shadow-2xl top-2/4 right-0 -translate-y-2/4 rounded-full select-none transition-all w-10 max-w-[48px] h-10 max-h-[48px] bg-gray-300 hover:bg-gray-400 active:bg-white/30 grid place-items-center"
            >
              <NextArrow strokeWidth={3} className="ml-1 h-7 w-7" />
            </button>
          )}
        </>
      ),
      navigation: null,
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
          background: "bg-white",
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
