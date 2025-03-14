import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Ajusta el tamaño según tu criterio
        if (isMobile) {
            navigate('/login'); // Redirige a la página de inicio de sesión
        }
    }, [navigate]);

    return null; // No renderiza nada
};

export default MobileRedirect