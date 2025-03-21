import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
});
