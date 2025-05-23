import { useForm as useFormReact} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export const useForm = (schema) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useFormReact({
      resolver: yupResolver(schema),
    });

  return {
    register,
    handleSubmit,
    errors,
  }
}
