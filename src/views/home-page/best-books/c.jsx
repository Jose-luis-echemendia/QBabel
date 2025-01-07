

export const C = ({
    currentData,
    data,
    transitionData,
    initialData,
    handleData,
    handleTransitionData,
    handleCurrentData,
    dataSlice
}) => {

    console.log(data)

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

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
        <button className="p-10 bg-red-100 text-yellow-300" onClick={handlePrev}>prev</button>
        <button className="p-10 bg-red-100 text-yellow-300" onClick={handleNext}>next</button>

        <div className="flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50">

        </div>
    </div>
  )
}





