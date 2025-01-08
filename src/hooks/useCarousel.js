import { useEffect, useState } from "react";
import {
  bestBooksData,
  initialBestBookData,
} from "@/constants/home-page/best-books";

export const useCarousel = () => {
  const [booksData, setBooksData] = useState(bestBooksData.slice(1));

  const [transitionData, setTransitionData] = useState(bestBooksData[0]);

  const [currentBookData, setCurrentBookData] = useState({
    data: initialBestBookData,
    index: 0,
  });

  const handlePrev = () => {
    setBooksData((prevData) => [
      transitionData ? transitionData : initialBestBookData,
      ...prevData.slice(0, prevData.length - 1),
    ]);

    setCurrentBookData({
      data: transitionData ? transitionData : bestBooksData[0],
      index: bestBooksData.findIndex(
        (ele) => ele.img === booksData[booksData.length - 1].img
      ),
    });

    setTransitionData(booksData[booksData.length - 1]);
  };

  const handleNext = () => {
    setBooksData((prev) => prev.slice(1));
    setTransitionData({
      data: transitionData ? transitionData : initialBestBookData,
      index: bestBooksData.findIndex((ele) => ele.img === booksData[0].img),
    });
    setCurrentBookData(booksData[0]);
    setTimeout(() => {
      setBooksData((newData) => [
        ...newData,
        transitionData ? transitionData : initialBestBookData,
      ]);
    }, 500);
  };

  

  return {
    booksData,
    handlePrev,
    handleNext,
  };
};
