import { useAuth } from "@/hooks/redux/useAuth";

export const ActiveAccount = ({ handleOpen, user }) => {
  const { handleAvtiveStatementRead } = useAuth();

  const handleClick = () => {
    handleAvtiveStatementRead();
    handleOpen();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-6 px-10">
        <h2 className="mb-7 text-4xl text-left font-extrabold">
          Bienvenido a la{" "}
          <span className="text-primary font-extrabold">Comunidad</span>
        </h2>
        <span className="mb-2">{user}</span>
        <p className="text-center text-black">
          Para verificar su registro y comenzar a navegar por nuestras historias
          consulte su correo electrónico para activar su cuenta
        </p>
        <button
          className="bg-primary py-2.5 px-8 rounded-xl mt-2.5"
          onClick={() => handleClick()}
        >
          <span className="text-black-500 font-anton font-medium text-2xl">
            Aceptar
          </span>
        </button>
      </div>
    </>
  );
};
