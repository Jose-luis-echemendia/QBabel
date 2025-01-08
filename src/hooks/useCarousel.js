import { useEffect, useState } from "react";
import {
  bestBooksData,
  initialBestBookData,
} from "@/constants/home-page/best-books";

export const useCarousel = () => {
  const [booksData, setBooksData] = useState(bestBooksData.slice(1));

  const [transitionBookData, setTransitionBookData] = useState(bestBooksData[0]);

  const [currentBookData, setCurrentBookData] = useState({
    data: initialBestBookData,
    index: 0,
  });

  const handlePrev = () => {
    setBooksData((prevData) => [
      transitionBookData ? transitionBookData : initialBestBookData,
      ...prevData.slice(0, prevData.length - 1),
    ]);

    setCurrentBookData({
      data: transitionBookData ? transitionBookData : bestBooksData[0],
      index: bestBooksData.findIndex(
        (ele) => ele.img === booksData[booksData.length - 1].img
      ),
    });

    setTransitionBookData(booksData[booksData.length - 1]);
  };

  const handleNext = () => {
    setBooksData((prev) => prev.slice(1));
    setTransitionBookData({
      data: transitionBookData ? transitionBookData : initialBestBookData,
      index: bestBooksData.findIndex((ele) => ele.img === booksData[0].img),
    });
    setCurrentBookData(booksData[0]);
    setTimeout(() => {
      setBooksData((newData) => [
        ...newData,
        transitionBookData ? transitionBookData : initialBestBookData,
      ]);
    }, 500);
  };

  return {
    booksData,
    transitionBookData,
    currentBookData,
    handlePrev,
    handleNext,
  };
};
