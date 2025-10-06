// src/components/filtering-options.jsx
import { OptionFilter } from "./option-filter"; // Nombre de archivo corregido
import { useState } from "react";

// *** IMPORTANTE: Define o importa estos arrays aquí ***
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
  { id: 0, criterion: "Todos los precios" },
  { id: 1, criterion: "$0 - 100$" },
  { id: 2, criterion: "$100 - 500$" },
  { id: 3, criterion: "$500 - 1500$" },
  { id: 4, criterion: "$1500 o más" },
];
const othersCriterion = [
  { id: 0, criterion: "Los más vendidos" },
  { id: 1, criterion: "Los más leídos" },
  { id: 2, criterion: "Los más comentados" },
  { id: 3, criterion: "Lo mejor de la semana" },
  { id: 4, criterion: "Los más votados por la comunidad" },
];
// ******************************************************

export const FilteringOptions = ({
  selectedFilters,
  onFilterChange,
  searchCriterionParam,
}) => {
  const [openAcc1, setOpenAcc1] = useState(false);
  const [openAcc2, setOpenAcc2] = useState(false);
  const [openAcc3, setOpenAcc3] = useState(false);
  const [openAcc4, setOpenAcc4] = useState(false);
  const [openAcc5, setOpenAcc5] = useState(false);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
  const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);

  return (
    // Este div es el md:col-span-2 del padre.
    // El div interno puede ser w-full h-full si quieres que ocupe todo ese espacio.
    <div className="w-full h-full flex flex-col gap-2.5">
      {searchCriterionParam && (
        <h6 className="text-3xl font-bold">"{searchCriterionParam}"</h6>
      )}
      <OptionFilter
        openAcc={openAcc1}
        handleOpenAcc={handleOpenAcc1}
        criterion={"Capítulos"} // Esta clave DEBE coincidir con la de selectedFilters
        options={partsCriterion}
        selectedOptionIds={selectedFilters["Capítulos"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc2}
        handleOpenAcc={handleOpenAcc2}
        criterion={"Última actualización"} // Esta clave DEBE coincidir
        options={updateCriterion}
        selectedOptionIds={selectedFilters["Última actualización"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc3}
        handleOpenAcc={handleOpenAcc3}
        criterion={"Contenido"} // Esta clave DEBE coincidir
        options={contentCriterion}
        selectedOptionIds={selectedFilters["Contenido"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc4}
        handleOpenAcc={handleOpenAcc4}
        criterion={"Precios"} // Esta clave DEBE coincidir
        options={priceCriterion}
        selectedOptionIds={selectedFilters["Precios"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc5}
        handleOpenAcc={handleOpenAcc5}
        criterion={"Otros filtros"} // Esta clave DEBE coincidir
        options={othersCriterion}
        selectedOptionIds={selectedFilters["Otros filtros"] || []}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
