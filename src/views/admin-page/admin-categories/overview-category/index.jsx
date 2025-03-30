import { customCheckboxTheme } from "@/utils/material-tailwindscss/themes";
import { Checkbox, ThemeProvider } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export const OverViewCategory = ({ category }) => {
  const [preview, setPreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Crear preview cuando se selecciona una imagen
  useEffect(() => {
    if (!selectedImage) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    // Limpieza
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(null);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full p-5">
        <h4 className="text-black font-semibold text-2xl w-fit">Category</h4>
        <form action="" className="grid grid-cols-6 w-full h-full gap-5">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="janesmith"
                  className="block border rounded-lg border-gray-100 min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Imagen
            </label>
            <div className="mt-2.5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="relative flex flex-col items-center justify-center text-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <>
                    {/* IMAGE ICON */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-44"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    {/* PHOTO ICON */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="absolute size-5 bottom-[80px] right-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>
                  </>
                )}

                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageSelect}
                      accept="image/png, image/jpeg, image/gif"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-4 flex gap-2 items-center -mt-1 ml-1">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900 mt-2.5"
            >
              Activo
            </label>
            <div className="mt-2.5">
              <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                <ThemeProvider value={customCheckboxTheme}>
                  <Checkbox defaultChecked />
                </ThemeProvider>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
