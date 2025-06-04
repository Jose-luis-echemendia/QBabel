import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/redux/useAuth";
import { useAppSelector } from "@/hooks/redux/useStore";
import { Button, Input } from "@material-tailwind/react";

const Activate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [activated, setActivated] = useState(false);
  const [load, setLoad] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const [error, setError] = useState("");
  const { handleActiveAccountThunk } = useAuth();
  const stateAuth = useAppSelector((state) => state.auth);

  const handleSubmit = (e) => {
    setLoad(true);
    e.preventDefault();
    if (!activationCode.trim()) {
      setError("Por favor ingresa el código de activación");
      return;
    }

    // Aquí puedes agregar la lógica para validar el código
    // Por ejemplo:
    const userID = params.userID;
    const token = params.token;

    handleActiveAccountThunk({ userID, token, activationCode });

    // Simulamos una activación exitosa después de 1 segundo
    setTimeout(() => {
      setActivated(true);
    }, 1000);
  };

  if (activated && !stateAuth.loading && stateAuth.isAuthenticated)
    return navigate("/home");

  return (
    <div className="min-h-screen p-20 flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-quicksand mb-10 text-7xl text-left font-bold">
            Bienvenido a la comunidad narrativa
          </h1>
          <span className="font-quicksand mb-10 text-7xl text-left font-bold text-primary text-shadow text-shadow-y-5 ml-8">
            QBabel
          </span>
        </div>

        <div className="w-full max-w-md">
          <Input
            type="text"
            label="Código de activación"
            value={activationCode}
            onChange={(e) => {
              setActivationCode(e.target.value);
              setError("");
            }}
            error={!!error}
            className="w-full"
            size="lg"
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <Button
          loading={stateAuth.loading && !activated}
          type="submit"
          className="bg-primary py-2.5 px-14 rounded-xl hover:bg-opacity-90 transition-colors"
        >
          <span className="text-black-500 font-anton font-medium text-2xl">
            Activar cuenta
          </span>
        </Button>
      </form>
    </div>
  );
};

export default Activate;
