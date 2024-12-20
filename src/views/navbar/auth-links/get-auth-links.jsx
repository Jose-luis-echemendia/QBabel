import { CustomIcon } from "@/components/icons/custom-icons";

export const GetAuthLinks = () => {
  return (
    <>
      <div className="flex items-center gap-10 mr-2">
        <div className="flex items-center gap-3">
          <a href=""><span>Registrarse</span></a>
          <CustomIcon src="/assets/icons/iconRegistrarse.svg" />
        </div>
        <div className="flex items-center gap-3">
          <a href=""><span>Iniciar sesión</span></a>
          <CustomIcon src="/assets/icons/iconIniciarSesion.svg" />
        </div>
      </div>
    </>
  );
};
