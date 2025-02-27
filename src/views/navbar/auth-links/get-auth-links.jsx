import { useState } from 'react';
import { CustomIcon } from "@/components/icons/custom-icons";
import {CustomModal}  from "@/components/modal/index"; // Ajusta la ruta según tu estructura

export const GetAuthLinks = () => {
  // Estados para controlar la apertura y cierre de los modales
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // Contenido del modal de registro
  const registerModalContent = (
    <div>
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );

  // Contenido del modal de inicio de sesión
  const loginModalContent = (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );

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
        header={<h3>Registrarse</h3>} // Título del modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        {registerModalContent}
      </CustomModal>

      {/* Modal de inicio de sesión */}
      <CustomModal
        open={openLoginModal}
        handleOpen={() => setOpenLoginModal(false)} // Cierra el modal
        header={<h3>Iniciar sesión</h3>} // Título del modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        {loginModalContent}
      </CustomModal>
    </>
  );
};