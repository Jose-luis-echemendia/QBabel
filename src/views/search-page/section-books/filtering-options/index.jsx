import { useParams } from "react-router-dom";
import { OptionFilter } from "./option-filter";

const partsCriterion = [
  { id: 1, criterion: "Cualquier extension" },
  { id: 2, criterion: "1 - 10 capítulos" },
  { id: 3, criterion: "10 - 30 capítulos" },
  { id: 4, criterion: "30 - 50 capítulos" },
  { id: 5, criterion: "50 o más capítulos" },
];

export const FilteringOptions = () => {
  const { criterion } = useParams();
  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
      <h6 className="text-3xl font-bold">&quot;{criterion}&quot;</h6>
      <span className="text-sm text-gray-600 -mt-1">395 resultados</span>
      <OptionFilter
        criterion={"Capítulos"}
        note={"Puedes seleccionar múltiples opciones"}
        options={partsCriterion}
      />
    </div>
  );
};
