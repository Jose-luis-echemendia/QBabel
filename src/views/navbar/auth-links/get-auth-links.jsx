import { useState } from "react";
import { CustomIcon } from "@/components/icons/custom-icons";
import { CustomModal } from "@/components/modal/index";
import { Login } from "@/views/auth/Login";
import { Signup } from "@/views/auth/Signup";


export const GetAuthLinks = () => {
  // Estados para controlar la apertura y cierre de los modales
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <>
      <div className="flex items-center gap-10 mr-2">
        {/* Botón para abrir el modal de registro */}
        <div className="flex items-center gap-3">
          <button onClick={() => setOpenRegisterModal(true)}>
            <span>Registrarse</span>
          </button>
          <CustomIcon src="/assets/icons/iconRegistrarse.svg" />
        </div>

        {/* Botón para abrir el modal de inicio de sesión */}
        <div className="flex items-center gap-3">
          <button onClick={() => setOpenLoginModal(true)}>
            <span>Iniciar sesión</span>
          </button>
          <CustomIcon src="/assets/icons/iconIniciarSesion.svg" />
        </div>
      </div>

      {/* Modal de registro */}
      <CustomModal
        open={openRegisterModal}
        handleOpen={() => setOpenRegisterModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        <Signup/>
      </CustomModal>

      {/* Modal de inicio de sesión */}
      <CustomModal
        open={openLoginModal}
        handleOpen={() => setOpenLoginModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        <Login/>
      </CustomModal>
    </>
  );
};
