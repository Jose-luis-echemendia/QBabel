import { useEffect, useState } from "react";
import { CustomIcon } from "@/components/icons/custom-icons";
import { CustomModal } from "@/components/modal/index";
import { Login } from "@/views/auth/login";
import { Signup } from "@/views/auth/Signup";
import { useAppSelector } from "@/hooks/redux/useStore";
import { ActiveAccount } from "@/views/auth/activeAccountModal";

export const GetAuthLinks = () => {
  // Estados para controlar la apertura y cierre de los modales
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [cantCreateUser, setCantCreateUser] = useState(true);
  const auth = useAppSelector((state) => state.auth);
  const createdUser =
    useAppSelector((state) => state.users.createdUser) || false;
  const [openActiveAccountModal, setOpenActiveAccountModal] = useState(false);

  useEffect(() => {
    if (auth.userForActiveAccount && createdUser && !auth.statementRead) {
      setOpenActiveAccountModal(true);
    }
  }, [auth.userForActiveAccount, createdUser, auth.statementRead]);

  return (
    <>
      <div className="flex text-xl items-center gap-10 mr-2">
        {/* Botón para abrir el modal de registro */}
        <div>
          <button
            onClick={() => setOpenRegisterModal(true)}
            className="flex gap-3"
          >
            <span>Registrarse</span>
            <CustomIcon src="/assets/icons/iconRegistrarse.svg" size={35} />
          </button>
        </div>

        {/* Botón para abrir el modal de inicio de sesión */}
        <div>
          <button
            onClick={() => setOpenLoginModal(true)}
            className="flex gap-3 items-center"
          >
            <span>Iniciar sesión</span>
            <CustomIcon src="/assets/icons/iconIniciarSesion.svg" size={35} />
          </button>
        </div>
      </div>
      {/*Modal para decirle al usaurio que active su cuenta */}
      <CustomModal
        open={openActiveAccountModal}
        handleOpen={() => setOpenActiveAccountModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
        exitButton={true}
        size="md"
      >
        <ActiveAccount handleOpen={() => setOpenActiveAccountModal(false)} />
      </CustomModal>

      {/* Modal de registro */}
      <CustomModal
        open={openRegisterModal}
        handleOpen={() => setOpenRegisterModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        <Signup
          handleCantCreateUser={setCantCreateUser}
          cantCreateUser={cantCreateUser}
          handleOpen={() => setOpenRegisterModal(false)}
          userForActiveAccount={auth.userForActiveAccount}
          createdUser={createdUser}
        />
      </CustomModal>

      {/* Modal de inicio de sesión */}
      <CustomModal
        open={openLoginModal}
        handleOpen={() => setOpenLoginModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        <Login />
      </CustomModal>
    </>
  );
};
