import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

export const schemaSignup = yup.object({
  userName: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("La confirmación de la contraseña es obligatoria"),
});
