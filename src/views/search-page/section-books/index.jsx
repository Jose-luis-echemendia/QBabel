// src/components/section-books.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Books } from "./books";
import { FilteringOptions } from "./filtering-options"; // Corregido: el nombre del archivo suele ser kebab-case
import { useAppSelector } from "@/hooks/redux/useStore";
import { useFilter } from "@/hooks/useFilter";

export const SectionBooks = () => {
  const { criterion: searchCriterionParamFromParams } = useParams();

  const [selectedFilters, setSelectedFilters] = useState({
    Capítulos: [], // Asegúrate que estas claves coincidan con las props 'criterion' en FilteringOptions
    "Última actualización": [],
    Contenido: [],
    Precios: [],
    "Otros filtros": [],
  });

  const {
    books: allBooksFromStore,
    loading: globalLoading,
    next,
  } = useAppSelector((state) => state.book);

  const { filteredBooks } = useFilter(allBooksFromStore || [], selectedFilters);

  const handleFilterChange = (criterionGroupKey, optionId, isChecked) => {
    // Definir los arrays de criterios aquí o importarlos si están en un archivo común
    // Esto es necesario para la lógica opcional de "seleccionar por defecto si está vacío"
    // const partsCriterion = [ { id: 1, criterion: "Cualquier extension" }, /* ... */ ];
    // const updateCriterion = [ { id: 1, criterion: "En cualquier momento" }, /* ... */ ];
    // const priceCriterion = [ { id: 0, criterion: "Todos los precios" }, /* ... */ ];

    setSelectedFilters((prevFilters) => {
      const currentSelectionForGroup = prevFilters[criterionGroupKey] || [];
      let newSelectionForGroup;

      const isAnyOptionForChapters =
        criterionGroupKey === "Capítulos" && optionId === 1;
      const isAnyOptionForUpdate =
        criterionGroupKey === "Última actualización" && optionId === 1;
      const isAnyOptionForPrice =
        criterionGroupKey === "Precios" && optionId === 0;

      if (isChecked) {
        if (
          isAnyOptionForChapters ||
          isAnyOptionForUpdate ||
          isAnyOptionForPrice
        ) {
          newSelectionForGroup = [optionId];
        } else {
          let tempSelection = [...currentSelectionForGroup, optionId];
          if (criterionGroupKey === "Capítulos")
            tempSelection = tempSelection.filter((id) => id !== 1);
          if (criterionGroupKey === "Última actualización")
            tempSelection = tempSelection.filter((id) => id !== 1);
          if (criterionGroupKey === "Precios")
            tempSelection = tempSelection.filter((id) => id !== 0);
          newSelectionForGroup = tempSelection;
        }
      } else {
        newSelectionForGroup = currentSelectionForGroup.filter(
          (id) => id !== optionId
        );
        // Opcional: si el grupo queda vacío y quieres seleccionar "Cualquiera/Todos" por defecto
        // Descomenta y asegúrate que los arrays de criterion estén definidos arriba
        // if (newSelectionForGroup.length === 0) {
        //   if (criterionGroupKey === "Capítulos" && partsCriterion.find(opt => opt.id === 1)) {
        //       newSelectionForGroup = [1];
        //   } else if (criterionGroupKey === "Última actualización" && updateCriterion.find(opt => opt.id === 1)) {
        //       newSelectionForGroup = [1];
        //   } else if (criterionGroupKey === "Precios" && priceCriterion.find(opt => opt.id === 0)) {
        //       newSelectionForGroup = [0];
        //   }
        // }
      }

      return {
        ...prevFilters,
        [criterionGroupKey]: newSelectionForGroup,
      };
    });
  };

  return (
    // Grid principal con 10 columnas en desktop
    <>
      {/* Columna de Filtros: ocupa 2 de 10 columnas en desktop */}
      <div className="md:col-span-2">
        <FilteringOptions
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          searchCriterionParam={searchCriterionParamFromParams}
        />
      </div>
      {/* Columna de Libros: ocupa 8 de 10 columnas en desktop */}
      <div className="md:col-span-8">
        <Books booksToDisplay={filteredBooks} />
      </div>
    </>
  );
};
