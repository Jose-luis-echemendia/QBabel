import { useParams } from "react-router-dom";
import { OptionFilter } from "./option-filter";

const partsCriterion = [
  { id: 1, criterion: "Cualquier extension" },
  { id: 2, criterion: "1 - 10 capítulos" },
  { id: 3, criterion: "10 - 30 capítulos" },
  { id: 4, criterion: "30 - 50 capítulos" },
  { id: 5, criterion: "50 o más capítulos" },
];
const updateCriterion = [
  { id: 1, criterion: "En cualquier momento" },
  { id: 2, criterion: "Hoy" },
  { id: 3, criterion: "Esta semana" },
  { id: 4, criterion: "Este mes" },
  { id: 5, criterion: "Este año" },
];
const contentCriterion = [
  { id: 1, criterion: "Mostrar solo historias completas" },
  { id: 2, criterion: "Sin terminar" },
  { id: 3, criterion: "Solo gratis" },
  { id: 4, criterion: "En descuento" },
  { id: 5, criterion: "historias recientes" },
  { id: 6, criterion: "Primeras historias" },
];
const priceCriterion = [
  { id: 1, criterion: "$0 - 100$" },
  { id: 2, criterion: "$100 - 500$" },
  { id: 3, criterion: "$500 - 1500$" },
  { id: 4, criterion: "$1500 o más" },
];

export const FilteringOptions = () => {
  const { criterion } = useParams();
  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
      <h6 className="text-3xl font-bold">&quot;{criterion}&quot;</h6>
      <span className="text-sm text-gray-600 -mt-1">395 resultados</span>
      <OptionFilter
        criterion={"Capítulos"}
        options={partsCriterion}
      />
      <OptionFilter
        criterion={"Última actualización"}
        options={updateCriterion}
      />
      <OptionFilter
        criterion={"Contenido"}
        options={contentCriterion}
      />
      <OptionFilter
        criterion={"Precios"}
        options={priceCriterion}
      />
    </div>
  );
};
