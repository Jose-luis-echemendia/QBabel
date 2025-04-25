import { Books } from "./books";
import { FilteringOptions } from "./filtering-options";

export const SectionBooks = () => {
  return (
    <>
      <FilteringOptions />
      <Books />
    </>
  );
};
