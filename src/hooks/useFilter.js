// src/hooks/useFilter.js
import { useMemo } from "react";

// Helper para fechas
const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isThisWeek = (date) => {
  const today = new Date();
  // Lunes como primer día de la semana
  const firstDayOfWeek = new Date(
    today.setDate(
      today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
    )
  );
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
  firstDayOfWeek.setHours(0, 0, 0, 0);
  lastDayOfWeek.setHours(23, 59, 59, 999);
  return date >= firstDayOfWeek && date <= lastDayOfWeek;
};

const isThisMonth = (date) => {
  const today = new Date();
  return (
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isThisYear = (date) => {
  const today = new Date();
  return date.getFullYear() === today.getFullYear();
};

export const useFilter = (allBooks, selectedFilters) => {
  const filteredBooks = useMemo(() => {
    if (!allBooks) return [];
    // Si no hay filtros seleccionados en ningún grupo, devolver todos los libros
    if (
      Object.keys(selectedFilters).every(
        (key) => !selectedFilters[key] || selectedFilters[key].length === 0
      )
    ) {
      return allBooks;
    }

    return allBooks.filter((book) => {
      // --- Filtro por Capítulos (partsCriterion) ---
      const chapterFilterIds = selectedFilters["Capítulos"] || [];
      if (chapterFilterIds.length > 0 && !chapterFilterIds.includes(1)) {
        // Si no es "Cualquier extensión"
        const passesChapterFilter = chapterFilterIds.some((id) => {
          if (id === 2)
            return book.number_chapters >= 1 && book.number_chapters <= 10;
          if (id === 3)
            return book.number_chapters >= 10 && book.number_chapters <= 30;
          if (id === 4)
            return book.number_chapters >= 30 && book.number_chapters <= 50;
          if (id === 5) return book.number_chapters >= 50;
          return false;
        });
        if (!passesChapterFilter) return false;
      }

      // --- Filtro por Última Actualización (updateCriterion) ---
      const updateFilterIds = selectedFilters["Última actualización"] || [];
      if (updateFilterIds.length > 0 && !updateFilterIds.includes(1)) {
        // Si no es "En cualquier momento"
        const bookUpdateDate = new Date(book.updated_at || book.published_date);
        const passesUpdateFilter = updateFilterIds.some((id) => {
          if (id === 2) return isToday(bookUpdateDate);
          if (id === 3) return isThisWeek(bookUpdateDate);
          if (id === 4) return isThisMonth(bookUpdateDate);
          if (id === 5) return isThisYear(bookUpdateDate);
          return false;
        });
        if (!passesUpdateFilter) return false;
      }

      // --- Filtro por Contenido (contentCriterion) ---
      const contentFilterIds = selectedFilters["Contenido"] || [];
      if (contentFilterIds.length > 0) {
        let passesContentFilter = true;
        for (const id of contentFilterIds) {
          let conditionMet = false;
          if (id === 1) conditionMet = book.is_complete === true;
          else if (id === 2) conditionMet = book.is_complete === false;
          else if (id === 3)
            conditionMet = book.is_free === true || book.price === 0;
          else if (id === 4) conditionMet = book.is_discount_active === true;
          else if (id === 5) {
            const bookCreationDate = new Date(
              book.created_at || book.published_date
            );
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            conditionMet = bookCreationDate >= oneMonthAgo;
          } else if (id === 6) {
            const bookCreationDate = new Date(
              book.created_at || book.published_date
            );
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            conditionMet = bookCreationDate < oneYearAgo;
          } else {
            conditionMet = true; // Si no hay lógica específica, o es un ID no manejado, asume que pasa.
          }
          if (!conditionMet) {
            passesContentFilter = false;
            break;
          }
        }
        if (!passesContentFilter) return false;
      }

      // --- Filtro por Precios (priceCriterion) ---
      const priceFilterIds = selectedFilters["Precios"] || [];
      if (priceFilterIds.length > 0 && !priceFilterIds.includes(0)) {
        // Si no es "Todos los precios"
        const effectivePrice =
          book.is_discount_active && typeof book.price_discounted === "number"
            ? book.price_discounted
            : book.price;
        const passesPriceFilter = priceFilterIds.some((id) => {
          if (id === 1) return effectivePrice >= 0 && effectivePrice <= 100;
          if (id === 2) return effectivePrice > 100 && effectivePrice <= 500;
          if (id === 3) return effectivePrice > 500 && effectivePrice <= 1500;
          if (id === 4) return effectivePrice > 1500;
          return false;
        });
        if (!passesPriceFilter) return false;
      }

      // --- Filtro por Otros (othersCriterion) ---
      const othersFilterIds = selectedFilters["Otros filtros"] || [];
      if (othersFilterIds.length > 0) {
        let passesOthersFilter = true;
        for (const id of othersFilterIds) {
          let conditionMet = false;
          if (id === 0) conditionMet = book.count_reads > 5000;
          // Umbral arbitrario para "más vendidos"
          else if (id === 1) conditionMet = book.count_reads > 1000;
          // Umbral arbitrario para "más leídos"
          // id: 2, "Los más comentados" - Necesitaría un campo `comments_count`
          else if (id === 3) {
            const bookPublishDate = new Date(book.published_date);
            conditionMet =
              isThisWeek(bookPublishDate) && book.avg_rating >= 4.0;
          } else if (id === 4) {
            conditionMet = book.avg_rating >= 4.5;
          } else {
            conditionMet = true; // Si no hay lógica específica o ID no manejado
          }

          if (!conditionMet) {
            passesOthersFilter = false;
            break;
          }
        }
        if (!passesOthersFilter) return false;
      }

      return true; // Si pasa todos los filtros
    });
  }, [allBooks, selectedFilters]);

  return { filteredBooks };
};
