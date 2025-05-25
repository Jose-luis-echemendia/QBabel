import { CustomIcon } from "@/components/icons/custom-icons";
import { schemaSearchBar } from "@/helpers/yup-schemas";
import { useForm } from "@/hooks/useForm";

export const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm(schemaSearchBar);

  const onSubmit = (data) => {
    alert(data);
    console.logs(data);
  };

  return (
    <>
      <div className="relative mb-1.5">
        <form onSubmit={handleSubmit(onSubmit)}></form>
        <input
          type="text"
          name="search"
          className="bg-white-100 bg-opacity-20 py-2 rounded-xl text-xl text-primary placeholder-primary pl-14 focus:outline-none ml-8"
          placeholder="Buscar"
          {...register("search")}
        />
        {errors.search && (
          <p className="text-red-500 text-sm mt-1">{errors.search.message}</p>
        )}
        <button>
          <CustomIcon
            src="/assets/icons/searchIcon.svg"
            size="30"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary ml-10"
          />
        </button>
      </div>
    </>
  );
};
