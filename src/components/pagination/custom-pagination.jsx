import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useBook } from "@/hooks/redux/useBook";
import { useLibrary } from "@/hooks/redux/useLibrary";
import { usePayment } from "@/hooks/redux/usePayment";

export const CustomTablePagination = () => {
  const { next, previous, count } = useAppSelector((state) => state.payment);
  const { handleGetPayments } = usePayment();
  const [active, setActive] = React.useState(1);

  const itemsPerPage = 15;
  const totalPages = Math.ceil(count / itemsPerPage);
  const maxVisiblePages = 5; // Número máximo de páginas visibles

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setActive(page);
    handleGetPayments({ p: page });
  };

  const handleNext = () => handlePageChange(active + 1);
  const handlePrev = () => handlePageChange(active - 1);

  // Genera los números de página visibles
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(active - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPages - maxVisiblePages + 1);

    return Array.from({ length: maxVisiblePages }, (_, i) => startPage + i);
  };

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => handlePageChange(index),
    className: "rounded-full",
    disabled: index < 1 || index > totalPages,
  });

  if (totalPages <= 1) return null; // No mostrar paginación si solo hay 1 página

  return (
    <div className="w-full flex items-center justify-between px-5 py-2">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={handlePrev}
        disabled={active === 1 || !previous}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="flex items-center gap-1">
        {/* Mostrar primera página si no está visible */}
        {active > Math.floor(maxVisiblePages / 2) + 1 &&
          totalPages > maxVisiblePages && (
            <>
              <IconButton {...getItemProps(1)}>1</IconButton>
              {active > Math.floor(maxVisiblePages / 2) + 2 && (
                <span className="mx-1">...</span>
              )}
            </>
          )}

        {/* Páginas visibles */}
        {getVisiblePages().map((page) => (
          <IconButton key={page} {...getItemProps(page)}>
            {page}
          </IconButton>
        ))}

        {/* Mostrar última página si no está visible */}
        {active < totalPages - Math.floor(maxVisiblePages / 2) &&
          totalPages > maxVisiblePages && (
            <>
              {active < totalPages - Math.floor(maxVisiblePages / 2) - 1 && (
                <span className="mx-1">...</span>
              )}
              <IconButton {...getItemProps(totalPages)}>
                {totalPages}
              </IconButton>
            </>
          )}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={handleNext}
        disabled={active === totalPages || !next}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
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
