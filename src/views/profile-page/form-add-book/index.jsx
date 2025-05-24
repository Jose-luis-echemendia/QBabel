import { useEffect, useState } from 'react';
import { PreviewCategories } from './preview-categories';
import { CustomModal } from '@/components/modal';
import { CategoriesModal } from './categories-modal';
import { Controller } from 'react-hook-form';
import { useForm } from '@/hooks/useForm';
import { Select, Option } from '@material-tailwind/react';
import { schemaBook } from '@/helpers/yup-schemas';
import { customCheckboxTheme } from '@/utils/material-tailwindscss/themes';
import { Checkbox, ThemeProvider } from '@material-tailwind/react';
import { Input, IconButton, Typography } from '@material-tailwind/react';
import { useBook } from '@/hooks/redux/useBook';
import { translateLanguageBookAdd } from '@/helpers/translate';

export const FormAddBook = ({ handleOpen }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [previewPdf, setPreviewPdf] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [chapters, setChapters] = useState(0);
  const [pages, setPages] = useState(0);
  const [price, setPrice] = useState(0);

  const { register, handleSubmit, errors, control } = useForm(schemaBook);
  const { handleCreateBook } = useBook();

  useEffect(() => {
    if (!selectedImage) {
      setPreviewImage(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImage(objectUrl);

    // Limpieza
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  // Crear preview cuando se selecciona un PDF
  useEffect(() => {
    if (!selectedPdf) {
      setPreviewPdf(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedPdf);
    setPreviewPdf(objectUrl);

    // Limpieza
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPdf]);

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(null);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  const handlePdfSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedPdf(null);
      return;
    }
    setSelectedPdf(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    console.log(errors.cover?.message);

    // Adjuntar archivos y datos
    formData.append('cover', data.cover[0]);
    formData.append('file', data.file[0]);
    formData.append('title', data.title);
    formData.append('isbn', data.title);
    formData.append('number_pages', data.number_pages);
    formData.append('number_chapters', data.number_chapters);
    formData.append('price', data.price);
    formData.append('synopsis', data.synopsis);

    formData.append('lenguage', translateLanguageBookAdd(data.language));
    formData.append('published', data.publishied);

    if (selectedCategories.length > 0 && selectedCategories.length <= 5) {
      const uids = selectedCategories.map((category) => category.uid);

      uids.forEach((uid) => {
        formData.append('categories', uid);
      });
    } else {
      alert('Debes seleccionar entre 1 y 5 categorias para el libro');
      return;
    }

    handleCreateBook(formData);
    console.log('formData', formData);
  };

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full h-full p-5'>
      <h4 className='text-black font-semibold text-2xl w-fit'>
        Registra tu libro
      </h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-12 w-full h-full gap-5 relative'
      >
        {/* COVER */}
        <div className='col-span-4'>
          <label
            htmlFor='cover-photo'
            className='block text-sm/6 font-medium text-gray-900'
          >
            Portada
          </label>
          <div className='mt-2.5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
            <div className='relative flex flex-col items-center justify-center text-center'>
              {previewImage ? (
                <img
                  src={previewImage}
                  alt='Preview'
                  className='h-32 w-32 object-cover rounded-lg mb-4'
                />
              ) : (
                <>
                  {/* IMAGE ICON */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-44'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                    />
                  </svg>
                  {/* PHOTO ICON */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute size-5 bottom-[80px] right-0'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
                    />
                  </svg>
                </>
              )}

              <div className='mt-4 flex text-sm/6 text-gray-600'>
                <label
                  htmlFor='cover-upload'
                  className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500'
                >
                  <span>Upload a file</span>
                  <input
                    id='cover-upload'
                    name='cover'
                    type='file'
                    className='sr-only'
                    {...register('cover')}
                    onChange={handleImageSelect}
                    accept='image/png, image/jpeg, image/gif'
                  />
                  {errors.cover && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.cover.message}
                    </p>
                  )}
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs/5 text-gray-600'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        {/* FILE */}
        <div className='col-span-4'>
          <label
            htmlFor='pdf-upload'
            className='block text-sm/6 font-medium text-gray-900'
          >
            Documento PDF
          </label>
          <div className='mt-2.5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
            <div className='relative flex flex-col items-center justify-center text-center'>
              {previewPdf ? (
                <div className='mb-4'>
                  <iframe
                    src={previewPdf}
                    className='w-full h-32 border rounded-lg'
                    title='PDF Preview'
                  >
                    <p>
                      Este navegador no soporta la previsualización de PDF.
                      Descarga el archivo para verlo.
                    </p>
                  </iframe>
                  <p className='text-sm text-gray-800 font-medium mt-2'>
                    Archivo seleccionado: {selectedPdf?.name}
                  </p>
                </div>
              ) : (
                <>
                  {/* FILE ICON */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-44'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 14.25v4.125A2.625 2.625 0 0 1 16.875 21H7.125A2.625 2.625 0 0 1 4.5 18.375V5.625A2.625 2.625 0 0 1 7.125 3h5.25L19.5 8.25v6z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.25 3v5.25H19.5'
                    />
                  </svg>
                </>
              )}

              <div className='mt-4 flex text-sm/6 text-gray-600'>
                <label
                  htmlFor='pdf-upload'
                  className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                >
                  <span>Sube un archivo</span>
                  <input
                    id='pdf-upload'
                    name='file'
                    type='file'
                    className='sr-only'
                    {...register('file')}
                    onChange={handlePdfSelect}
                    accept='application/pdf'
                  />
                  {errors.file && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.file.message}
                    </p>
                  )}
                </label>
                <p className='pl-1'>o arrástralo aquí</p>
              </div>
              <p className='text-xs/5 text-gray-600'>Solo PDF, hasta 40MB</p>
            </div>
          </div>
        </div>

        {/* More information */}
        <div className='sm:col-span-4 flex flex-col gap-4'>
          {/* category */}
          <div className='flex gap-4'>
            <label
              htmlFor='categories'
              className='block text-sm/6 font-medium text-gray-900'
            >
              Categorías
            </label>
            <button type='button' onClick={() => setOpenCategoryModal(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5  hover:cursor-pointer'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {/* Modal para agregar categorias al libro */}
            <CustomModal
              open={openCategoryModal}
              handleOpen={() => setOpenCategoryModal(false)} // Cierra el modal
              classNameDialog='custom-dialog-class' // Clases personalizadas
              classNameBody='custom-body-class'
              exitButton={true}
              size='lg'
            >
              <CategoriesModal
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                handleOpen={() => setOpenCategoryModal(false)}
              />
            </CustomModal>
          </div>
          <div className='mt-2'>
            {selectedCategories.length > 0 ? (
              <PreviewCategories categories={selectedCategories} />
            ) : (
              <span>Agg tus categorias.5 como maximo</span>
            )}
          </div>

          {/* Lenguaje */}

          <div className='mt-20'>
            <Controller
              name='lenguage'
              control={control}
              defaultValue={'Español'}
              render={({ field }) => (
                <Select
                  label='Select type lenguage'
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                >
                  <Option value='Español'>Español</Option>
                  <Option value='Inglés'>Inglés</Option>
                </Select>
              )}
            />
            {errors.language && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.lenguage.message}
              </p>
            )}
          </div>

          {/* Publishied */}
          <div className='sm:col-span-4 flex gap-2 items-center -mt-1 ml-1'>
            <label
              htmlFor='name'
              className='block text-sm/6 font-medium text-gray-900 mt-2.5'
            >
              Publicar
            </label>
            <div className='mt-2.5'>
              <div className='flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary'>
                <ThemeProvider value={customCheckboxTheme}>
                  <Checkbox
                    defaultChecked
                    id='publishied'
                    name='publishied'
                    {...register('publishied')}
                  />
                </ThemeProvider>
                {errors.isActive && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.isActive.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div className='w-48'>
              <Typography
                variant='small'
                color='blue-gray'
                className='mb-1 font-medium text-[12px]'
              >
                Selecciona el numero de paginas
              </Typography>
              <div className='relative w-full'>
                <Input
                  type='number'
                  name='number_pages'
                  {...register('number_pages')}
                  className='!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  containerProps={{
                    className: 'min-w-0',
                  }}
                />
                {errors.number_pages && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.number_pages.message}
                  </p>
                )}
              </div>
            </div>
            <div className='w-48'>
              <Typography
                variant='small'
                color='blue-gray'
                className='mb-1 font-medium text-[12px]'
              >
                Selecciona el numero de capitulos
              </Typography>
              <div className='relative w-full'>
                <Input
                  type='number'
                  name='number_chapters'
                  {...register('number_chapters')}
                  className='!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  containerProps={{
                    className: 'min-w-0',
                  }}
                />
                {errors.number_chapters && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.number_chapters.message}
                  </p>
                )}
              </div>
            </div>
            <Typography
              variant='small'
              color='gray'
              className='mt-2 font-normal col-span-2 mx-auto text-[14px]'
            >
              Ajusta el numero usando los controladores + y -.
            </Typography>
          </div>

          {/* Precio */}
          <div className='sm:col-span-4 flex flex-col gap-2 w-48 max-w-sm items-start '>
            <label htmlFor='precio' className='block font-medium text-gray-900'>
              <Typography
                variant='small'
                color='blue-gray'
                className='mb-1 font-medium text-sm text-black-500'
              >
                Precio en{' '}
                <span className='font-semibold text-md text-black-80 ml-1'>
                  CUP
                </span>
              </Typography>
            </label>
            <div className='relative w-full'>
              <Input
                type='number'
                placeholder='1,000'
                className='appearance-none rounded-r-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                containerProps={{
                  className: 'min-w-0',
                }}
                name='price'
                {...register('price')}
              />
              {errors.price && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          <div className='mt-44'>
            <div className='flex items-center justify-end gap-4 border-t col-span-full pt-4 -mt-2'>
              <button
                className='bg-black-500 py-1 px-2.5 rounded-xl'
                type='button'
                onClick={(e) => (e.preventDefault(), handleOpen())}
              >
                <span className='text-primary font-semibold'>Cancelar</span>
              </button>
              <button className='bg-primary py-1 px-2.5 rounded-xl'>
                <span className='text-black-500 font-semibold'>Aceptar</span>
              </button>
            </div>
          </div>
        </div>

        <div className='col-span-8  mt-[-350px]'>
          {/* TITLE */}
          <div className='mb-10'>
            <label
              htmlFor='title'
              className='block text-sm/6 font-medium text-gray-900 ml-2.5'
            >
              Title
            </label>
            <div className='mt-2.5'>
              <div className='flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary'>
                <input
                  id='title'
                  name='title'
                  type='text'
                  {...register('title')}
                  placeholder='janesmith'
                  className='block border p-2 rounded-lg border-gray-100 min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                />
                {errors.title && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sinopsis */}
          <div className=''>
            <label
              htmlFor='synopsis'
              className='block text-sm/6 font-medium text-gray-900 ml-2.5'
            >
              Sinopsis
            </label>
            <div className='mt-2.5 w-full'>
              <div className='flex w-full items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary'>
                <textarea
                  name='synopsis'
                  id='synopsis'
                  {...register('synopsis')}
                  className='w-full h-48 rounded-lg border border-gray-100 min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 p-2'
                  placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
                ></textarea>
                {errors.synopsis && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.synopsis.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
