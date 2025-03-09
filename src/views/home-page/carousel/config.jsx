export const PrevArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
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
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
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
                className="!absolute shadow-2xl top-2/4 -left-7 -translate-y-2/4 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px] bg-gray-100 hover:bg-white/10 active:bg-white/30 grid place-items-center"
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
              className="!absolute shadow-2xl top-2/4 -right-6 -translate-y-2/4 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px] bg-gray-100 hover:bg-white/10 active:bg-white/30 grid place-items-center"
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
