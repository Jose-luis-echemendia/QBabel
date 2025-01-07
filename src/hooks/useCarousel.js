import { useState } from "react"
import { bestBooksData, initialBestBookData } from "@/constants/home-page/best-books";

export const useCarousel = () => {
    const [booksData, setBooksData] = useState(bestBooksData.slice(1));
    
    const [transitionData, settransitionData] = useState(bestBooksData[0]);

    const [currentBookData, setCurrentBookData] = useState({
      data: initialBestBookData,
      index: 0,
    });

    const handlePrev = () => {
        setBooksData((prevData) => [
            transitionData ? transitionData : initialBestBookData,
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
        setBooksData((prev) => prev.slice(1));
        handleCurrentData({
            data: transitionData ? transitionData: initialBestBookData,
            index: dataSlice.findIndex((ele) =>ele.img === data[0].img),
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            setBooksData((newData) => [
                ...newData,
                transitionData ? transitionData: initialBestBookData,
            ])
        }, 5)
    }

  return {
    handlePrev,
    handleNext
}
}
