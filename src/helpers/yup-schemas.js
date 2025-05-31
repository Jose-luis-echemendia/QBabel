import * as yup from "yup";

export const schemaSearchBar = yup.object({
  search: yup
    .string()
    .required(
      "Este campo es obligatorio. Por favor introduzca algo en el campo de búsqueda"
    ),
});

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email("Ha introducido datos incorrectos. El correo es inválido")
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un correo electrónico"
    ),
  password: yup
    .string()
    .min(
      8,
      "Ha introducido datos incorrectos. La contraseña debe tener al menos 6 caracteres"
    )
    .required(
      "Todos los campos son obligatorios. Por favor introduzca una contraseña"
    ),
});

export const schemaSignup = yup.object({
  user_name: yup
    .string()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un nombre de usuario"
    ),
  email: yup
    .string()
    .email("Ha introducido datos incorrectos. El correo es inválido")
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un correo electrónico"
    ),
  password: yup
    .string()
    .min(
      8,
      "Ha introducido datos incorrectos. La contraseña debe tener al menos 6 caracteres"
    )
    .required(
      "Todos los campos son obligatorios. Por favor introduzca una contraseña"
    ),
  re_password: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Ha introducido datos incorrectos. Las contraseñas deben coincidir"
    )
    .required(
      "Todos los campos son obligatorios. Por favor introduzca la confirmación de la contraseña"
    ),
});

export const schemaCategory = yup.object({
  name: yup
    .string()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un nombre"
    )
    .matches(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "El nombre solo puede contener letras"
    ),
  description: yup.string(),
  type: yup
    .string()
    .oneOf(["Libro", "Revista", "Publicaciones"], "Tipo inválido")
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un tipo"
    ),
  img: yup
    .mixed()
    .test(
      "required",
      "Todos los campos son obligatorios. Por favor seleccione una imagen",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return true;
      }
    )
    .test(
      "fileSize",
      "Ha introducido datos incorrectos. El archivo es muy grande",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return value[0].size <= 10 * 1024 * 1024; // 10MB
      }
    )
    .test(
      "fileType",
      "Ha introducido datos incorrectos. El archivo debe ser una imagen válida",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
      }
    ),
  isActive: yup
    .boolean()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un estado"
    ),
});

export const schemaProfile = yup.object({
  avatar: yup
    .mixed()
    .test(
      "required",
      "Todos los campos son obligatorios. Por favor seleccione una imagen",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return true;
      }
    )
    .test(
      "fileSize",
      "Ha introducido datos incorrectos. El archivo es muy grande",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return value[0].size <= 10 * 1024 * 1024; // 10MB
      }
    )
    .test(
      "fileType",
      "Ha introducido datos incorrectos. El archivo debe ser una imagen válida",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
      }
    ),
});

export const schemaBook = yup.object({
  title: yup
    .string()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca un título"
    ),
  synopsis: yup
    .string()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca una sinopsis"
    ),
  cover: yup
    .mixed()
    .test(
      "required",
      "Todos los campos son obligatorios. Por favor seleccione una imagen",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return true;
      }
    )
    .test(
      "fileSize",
      "Ha introducido datos incorrectos. El archivo es muy grande",
      (value) => {
        if (!value || value.length === 0) return true;
        return value[0].size <= 10 * 1024 * 1024; // 10MB
      }
    )
    .test(
      "fileType",
      "Ha introducido datos incorrectos. El archivo debe ser una imagen",
      (value) => {
        if (!value || value.length === 0) return true;
        return (
          value[0].type === "image/jpeg" ||
          value[0].type === "image/png" ||
          value[0].type === "image/jpg"
        );
      }
    )
    .required("Ha introducido datos incorrectos. "),

  // Nuevos campos
  file: yup
    .mixed()
    .test(
      "required",
      "Todos los campos son obligatorios. Por favor seleccione un archivo",
      (value) => {
        if (!value || value.length === 0) return false; // Ahora es obligatorio
        return true;
      }
    )
    .test(
      "fileSize",
      "Ha introducido datos incorrectos. El PDF es muy grande",
      (value) => {
        if (!value || value.length === 0) return true;
        return value[0].size <= 20 * 1024 * 1024; // 20MB
      }
    )
    .test(
      "fileType",
      "Ha introducido datos incorrectos. El archivo debe ser un PDF",
      (value) => {
        if (!value || value.length === 0) return true;
        return value[0].type === "application/pdf";
      }
    )
    .required(
      "Todos los campos son obligatorios. Por favor seleccione un archivo"
    ),
  number_pages: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .nullable()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca la cantidad de páginas"
    )
    .positive(
      "Ha introducido datos incorrectos. El número de páginas debe ser positivo"
    )
    .integer("Ha introducido datos incorrectos. Debe ser un número entero")
    .min(1, "Ha introducido datos incorrectos. Debe tener al menos 1 página"),

  number_chapters: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .nullable()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca la cantidad de capítulos"
    )
    .positive(
      "Ha introducido datos incorrectos. El número de capítulos debe ser positivo"
    )
    .integer("Ha introducido datos incorrectos. Debe ser un número entero")
    .min(1, "Ha introducido datos incorrectos. Debe tener al menos 1 capítulo"),

  price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .nullable()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca el precio"
    )
    .integer("Ha introducido datos incorrectos. Debe ser un número entero")
    .positive(
      "Ha introducido datos incorrectos. El precio tiene que ser un número positivo"
    ),

  lenguage: yup
    .string()
    .required(
      "Todos los campos son obligatorios. Por favor introduzca el idioma"
    )
    .oneOf(
      ["Español", "Inglés"],
      "Ha introducido campos incorrectos. El idioma debe ser español o inglés"
    ),
  publishied: yup
    .boolean()
    .required(
      "Todos los campos son obligatorios. Por favor seleccione el estado"
    ),
});
