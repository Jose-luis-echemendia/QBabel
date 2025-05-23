import * as yup from 'yup';

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('El email es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

export const schemaSignup = yup.object({
  user_name: yup.string().required('El nombre es obligatorio'),
  email: yup
    .string()
    .email('Email inválido')
    .required('El email es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria'),
  re_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es obligatoria'),
});

export const schemaCategory = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  description: yup.string(),
  img: yup
    .mixed()
    .test('fileSize', 'El archivo es muy grande', (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 10 * 1024 * 1024; // 10MB
    })
    .test('fileType', 'El archivo debe ser una imagen', (value) => {
      if (!value || value.length === 0) return true;
      return (
        value[0].type === 'image/jpeg' ||
        value[0].type === 'image/png' ||
        value[0].type === 'image/jpg'
      );
    }),

  type: yup
    .string()
    .oneOf(['Libro', 'Revista', 'Publicaciones'], 'Tipo inválido')
    .required('El tipo es obligatorio'),
  isActive: yup.boolean().required('El estado es obligatorio'),
});

export const schemaBook = yup.object({
  title: yup.string().required("El titulo es obligatorio"),
  synopsis: yup.string().required("La sinopsis es obligatoria"),
  cover: yup
    .mixed()
    .test('fileSize', 'El archivo es muy grande', (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 10 * 1024 * 1024; // 10MB
    })
    .test('fileType', 'El archivo debe ser una imagen', (value) => {
      if (!value || value.length === 0) return true;
      return (
        value[0].type === 'image/jpeg' ||
        value[0].type === 'image/png' ||
        value[0].type === 'image/jpg'
      );
    })
    .required("La portada es obligatoria"),
  // Nuevos campos
  file: yup
    .mixed()
    .test('fileSize', 'El PDF es muy grande', (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 20 * 1024 * 1024; // 20MB
    })
    .test('fileType', 'El archivo debe ser un PDF', (value) => {
      if (!value || value.length === 0) return true;
      return value[0].type === 'application/pdf';
    })
    .required('El PDF del libro es obligatorio'),
  number_pages: yup
    .number()
    .required('La cantidad de páginas es obligatoria')
    .integer('Debe ser un número entero')
    .min(1, 'Debe tener al menos 1 página'),
  number_chapters: yup
    .number()
    .required('La cantidad de capítulos es obligatoria')
    .integer('Debe ser un número entero')
    .min(1, 'Debe tener al menos 1 capítulo'),
  price: yup
    .number()
    .required('El precio es obligatorio')
    .min(0, 'El precio no puede ser negativo'),
  language: yup
    .string()
    .required("El idioma es obligatorio")
    .oneOf(["Español", "Inglés"], "El idioma debe ser español o inglés"),
});
