import { CustomIcon } from "@/components/icons/custom-icons";
import { schemaSearchBar } from "@/helpers/yup-schemas";
import { useForm } from "@/hooks/useForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const SearchBar = () => {
  const params = useParams();
  const { register, handleSubmit, errors, setValue } = useForm(schemaSearchBar);
  const navigate = useNavigate();

  useEffect(() => {
    if (params) {
      setValue("search", params.criterion);
    }
  }, [params, setValue]);

  const onSubmit = (data) => {
    navigate(`/search/${data.search}`);
  };

  return (
    <>
      <div className="relative mb-1.5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="search"
            className="bg-white-100 bg-opacity-20 py-2 rounded-xl text-xl text-primary placeholder-primary pl-14 focus:outline-none ml-8"
            placeholder="Buscar"
            {...register("search")}
          />
          {errors.search && (
            <p className="absolute text-red-500 text-sm mt-1">
              {errors.search.message}
            </p>
          )}
          <button>
            <CustomIcon
              src="/assets/icons/searchIcon.svg"
              size="30"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary ml-10"
            />
          </button>
        </form>
      </div>
    </>
  );
};
