import { schemaProfile } from "@/helpers/yup-schemas";
import { useForm } from "@/hooks/useForm";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useUpdateProfile } from "@/hooks/jquery/useProfileQuery";

export const ProfileForm = ({ handleOpen }) => {
  const profile = useAppSelector((state) => state.profile.profile);
  const [preview, setPreview] = useState(null);
  const [changeImage, setChangeImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, errors } = useForm(schemaProfile);

  const { mutate: updateProfile } = useUpdateProfile();

  // Crear preview cuando se selecciona una imagen
  useEffect(() => {
    if (!selectedImage) {
      if (profile?.avatar_details) {
        setPreview(profile.avatar_details.image); // Imagen existente de la categoría
      } else {
        setPreview(null);
      }
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    // Limpieza
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage, profile]);

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(null);
      return;
    }
    setSelectedImage(e.target.files[0]);
    setChangeImage(true);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    if (profile.user_name !== data.user_name) {
      formData.append("user_name", data.user_name);
    }

    if (changeImage && selectedImage) {
      formData.append("avatar", selectedImage);
    }
    if (formData.size !== 0) {
      updateProfile({ id: profile.uid, data: formData });
    }
    handleOpen();
  };
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full p-5">
        <h4 className="text-black font-semibold text-2xl w-fit">
          Actualiza tu perfil
        </h4>
        <form
          className="grid grid-cols-6 w-full h-full gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Nombre de usuario
            </label>
            <div className="mt-2.5">
              <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  {...register("user_name")}
                  placeholder={profile.user_name}
                  defaultValue={profile.user_name}
                  className="block border p-2 rounded-lg border-gray-100 min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />

                {errors.user_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.user_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Avatar
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
                      className="absolute size-5 bottom-[80px] right-11"
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
                    <span>Seleccione tu foto de perfil</span>{" "}
                    <input
                      id="file-upload"
                      name="avatar"
                      type="file"
                      {...register("avatar")}
                      className="sr-only"
                      onChange={handleImageSelect}
                      accept="image/png, image/jpeg, image/gif"
                    />
                    {errors.avatar && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.avatar.message}
                      </p>
                    )}
                  </label>
                  <p className="pl-1">o arrástrelo hasta aquí</p>
                </div>
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 border-t col-span-full pt-4 -mt-2">
            <button
              className="bg-black-500 py-1 px-2.5 rounded-xl"
              type="button"
              onClick={(e) => (e.preventDefault(), handleOpen())}
            >
              <span className="text-primary font-semibold">Cancelar</span>
            </button>
            <button className="bg-primary py-1 px-2.5 rounded-xl">
              <span className="text-black-500 font-semibold">Aceptar</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
