import { useParams } from "react-router-dom";
import { PartsFilter } from "./parts-filter";

export const FilteringOptions = () => {
  const { criterion } = useParams();
  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
      <h6 className="text-3xl font-bold">&quot;{criterion}&quot;</h6>
      <span className="text-sm text-gray-600 -mt-1">395 resultados</span>
      <div className="flex flex-col gap-0.5 mt-5">
        <span className="text-xl font-bold">Capítulos</span>
        <small className="text-xs text-gray-600">
          Puedes seleccionar múltiples opciones
        </small>
        <PartsFilter/>
      </div>
    </div>
  );
};
