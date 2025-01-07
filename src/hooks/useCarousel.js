import { useState } from "react"
import { bestBooksbooksData, initialBestBookbooksData } from "@/constants/home-page/best-books";

export const useCarousel = () => {
    const [booksbooksData, setBooksbooksData] = useState(bestBooksbooksData.slice(1));
    
    const [transitionbooksData, setTransitionbooksData] = useState(bestBooksbooksData[0]);

    const [currentBookbooksData, setCurrentBookbooksData] = useState({
      booksData: initialBestBookbooksData,
      index: 0,
    });

    const handlePrev = () => {
        setBooksbooksData((prevbooksData) => [
            transitionbooksData ? transitionbooksData : initialBestBookbooksData,
            ...prevbooksData.slice(0, prevbooksData.length - 1),
        ]);
        
        setTransitionbooksData({
            booksData: transitionbooksData ? transitionbooksData : bestBooksbooksData[0],
            index: bestBooksbooksData.findIndex(
                (ele) => ele.img === booksData[booksData.length - 1].img
            ),
        });
        
        handleTransitionbooksData(booksData[booksData.length - 1]);
    }

    const handleNext = () => {
        setBooksbooksData((prev) => prev.slice(1));
        setTransitionbooksData({
            booksData: transitionbooksData ? transitionbooksData: initialBestBookbooksData,
            index: bestBooksbooksData.findIndex((ele) =>ele.img === booksData[0].img),
        });
        handleTransitionbooksData(booksData[0]);
        setTimeout(() => {
            setBooksbooksData((newbooksData) => [
                ...newbooksData,
                transitionbooksData ? transitionbooksData: initialBestBookbooksData,
            ])
        }, 5)
    }

  return {
    handlePrev,
    handleNext
}
}
