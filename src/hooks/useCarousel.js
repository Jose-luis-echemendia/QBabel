import { useState } from "react"
import { bestBooksData, initialBestBookData } from "@/constants/home-page/best-books";

export const useCarousel = () => {
    const [bookData, setBookData] = useState(bestBooksData.slice(1));
    
    const [transitionBookData, setTransitionBookData] = useState(bestBooksData[0]);

    const [currentBookData, setCurrentBookData] = useState({
      data: initialBestBookData,
      index: 0,
    });

    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initialData,
            ...prevData.slice(0, prevData.length - 1),
        ]);
        
        handleCurrentData({
            data: transitionData ? transitionData : dataSlice[0],
            index: dataSlice.findIndex(
                (ele) => ele.img === data[data.length - 1].img
            ),
        });
        
        handleTransitionData(data[data.length - 1]);
    }

    const handleNext = () => {
        handleData((prev) => prev.slice(1));
        handleCurrentData({
            data: transitionData ? transitionData: initialData,
            index: dataSlice.findIndex((ele) =>ele.img === data[0].img),
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData: initialData,
            ])
        }, 5)
    }

  return {
    handlePrev
    handleNext
}
}
