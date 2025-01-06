import { Aplilamiento } from "./Apilamiento"
import { Componente1 } from "./Componente1"
import { Componente2 } from "./Componente2"


export const ExplotaTuTalento = () => {
  return (
    <div className="w-full h-[740px] relative  bg-primary p-1 bg-opacity-50">
      <h2 className="text-center text-[40px] font-bold font-inter mt-36  ">
        Explota tu talento
      </h2>

      <div className="flex  justify-center">
      <Componente2/>
      </div>

      <Componente1/>
      <Aplilamiento/>
      
    </div>
  )
}
