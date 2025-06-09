import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useBook } from "@/hooks/redux/useBook";
import { useLibrary } from "@/hooks/redux/useLibrary";

export const CustomTablePagination = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="w-full flex items-center justify-between px-5">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const SimplePagination = ({ activeTab }) => {
  const { next, previous, count } = useAppSelector((state) => {
    if (activeTab === "myStory") return state.book;
    return state.library;
  });

  const [active, setActive] = React.useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(count / itemsPerPage);

  const { handleGetItemsOfLIbraryThunk } = useLibrary();
  const { handleGetBooks } = useBook();

  const handlePageChange = (page) => {
    setActive(page);

    if (activeTab === "myStory") {
      handleGetBooks({ me: true, p: page });
    } else {
      let params = { p: page };
      if (activeTab === "readingStory") params.is_sold = true;
      if (activeTab === "forBuying") params.is_sold = false;

      handleGetItemsOfLIbraryThunk(params);
    }
  };

  const handleNext = () => {
    if (active === totalPages) return;
    handlePageChange(active + 1);
  };

  const handlePrev = () => {
    if (active === 1) return;
    handlePageChange(active - 1);
  };

  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
      fixed bottom-4 left-0 right-0 z-20
      flex justify-center 
      transition-all duration-300
      ${isScrolled ? "opacity-70 hover:opacity-100" : "opacity-100"}
    `}
    >
      <div
        className="
        bg-white dark:bg-gray-800 
        rounded-full shadow-lg 
        px-6 py-2 
        flex items-center gap-8
        border border-gray-200 dark:border-gray-700
      "
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={handlePrev}
          disabled={active === 1 || !previous}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of{" "}
          <strong className="text-gray-900">{totalPages}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={handleNext}
          disabled={active === totalPages || !next}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
};
