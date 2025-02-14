

export const Card =({src, alt , text })=>{
    return (
        <div className="relative  px-24 mt-10  py-6 rounded-2xl  m-10 shadow-lg overflow-hidden border-2 border-gray-400">
            <p className=" text-black mr-16 font-quicksand font-normal text-[30px] "> {text} </p>
            <div className="absolute right-0 px-1 top-3 h-20 ">
            <img src={src} alt={alt} className="w-full h-full" />
            </div>
        </div>
    )
}