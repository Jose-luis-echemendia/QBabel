import { CustomIcon } from "@/components/icons/custom-icons";

export const GetAuthLinks = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <a href=""><span>Registrarse</span></a>
          <CustomIcon src="/assets/iconRegistrarse.svg" />
        </div>
        <div className="flex items-center gap-3">
          <a href=""><span>Iniciar sesión</span></a>
          <CustomIcon src="/assets/iconIniciarSesion.svg" />
        </div>
      </div>
    </>
  );
};
