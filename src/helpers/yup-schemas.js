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

export const schemaCategory = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  description: yup.string(),
  img: yup
    .mixed()
    .test("fileSize", "El archivo es muy grande", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 10 * 1024 * 1024; // 10MB
    })
    .test("fileType", "El archivo debe ser una imagen", (value) => {
      if (!value || value.length === 0) return true;
      return (
        value[0].type === "image/jpeg" ||
        value[0].type === "image/png" ||
        value[0].type === "image/jpg"
      );
    }),

  type: yup
    .string()
    .oneOf(["Libro", "Revista", "Publicaciones"], "Tipo inválido")
    .required("El tipo es obligatorio"),
  isActive: yup.boolean().required("El estado es obligatorio"),
});
