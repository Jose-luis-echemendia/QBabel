// src/components/FilteringOptions.jsx
import { useParams } from "react-router-dom";
import { OptionFilter } from "./option-filter"; // Ajusta la ruta si es necesario
import { useState } from "react";
import { useAppSelector } from "@/hooks/redux/useStore"; // Ajusta la ruta

// Definiciones de los criterios (deben estar disponibles aquí)
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

export const FilteringOptions = ({ selectedFilters, onFilterChange }) => {
  const { criterion: searchCriterionParam } = useParams();
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

  // Este count es el total ANTES de filtrar localmente.
  // El count de resultados filtrados se manejará en el componente padre.
  const countResultsFromSearch = useAppSelector((state) => state.book.count);

  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
      <h6 className="text-3xl font-bold">"{searchCriterionParam}"</h6>
      {/* El conteo de resultados filtrados se mostrará en el componente padre 
          o se pasará aquí si es necesario.
      <span className="text-sm text-gray-600 -mt-1">
        {countResultsFromSearch} resultados iniciales
      </span> 
      */}
      <OptionFilter
        openAcc={openAcc1}
        handleOpenAcc={handleOpenAcc1}
        criterion={"Capítulos"}
        options={partsCriterion}
        selectedOptionIds={selectedFilters["Capítulos"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc2}
        handleOpenAcc={handleOpenAcc2}
        criterion={"Última actualización"}
        options={updateCriterion}
        selectedOptionIds={selectedFilters["Última actualización"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc3}
        handleOpenAcc={handleOpenAcc3}
        criterion={"Contenido"}
        options={contentCriterion}
        selectedOptionIds={selectedFilters["Contenido"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc4}
        handleOpenAcc={handleOpenAcc4}
        criterion={"Precios"}
        options={priceCriterion}
        selectedOptionIds={selectedFilters["Precios"] || []}
        onFilterChange={onFilterChange}
      />
      <OptionFilter
        openAcc={openAcc5}
        handleOpenAcc={handleOpenAcc5}
        criterion={"Otros filtros"}
        options={othersCriterion}
        selectedOptionIds={selectedFilters["Otros filtros"] || []}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
