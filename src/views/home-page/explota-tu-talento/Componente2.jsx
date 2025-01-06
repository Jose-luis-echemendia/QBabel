import { v4 as uuidv4 } from 'uuid';

const phoneInfo = [
    {
        number: 1,
        title: "Crea",
        description: "Comparte tu voz única y transforma tus ideas en relatos cautivadores. Encuentra recursos para dar vida a tu historia, explorando estilos y tramas. Deja que tus emociones guíen tu pluma y crea una narrativa auténtica.",
        span: "¡Escribe y deja tu huella en el mundo!",
        bg: "#fff",
        textColorSpan:"#EAD38D"
    },
    {
        number: 2,
        title: "Crece",
        description: "Descubre cómo crecer como escritor. Encuentra tu voz única, perfecciona tu estilo y experimenta con distintos géneros y técnicas. Cada palabra que escribas es un paso hacia tu evolución. ",
        span: "¡Deja que tu pasión por la escritura te impulse a alcanzar nuevas alturas!",
        bg: "#644844",
        textColorSpan:"#EAD38D",
    },
    {
        number: 3,
        title: "Construye",
        description: "Construye seguidores compartiendo tus historias y conectando con lectores apasionados. Usa nuestras herramientas para promocionar tu trabajo y mantener la interacción.    ",
        span: "¡Deja que tu escritura hable y observa cómo tu comunidad crece!",
        bg: "#625453",
        textColorSpan:"#EAD38D"
    },
    


];

export const Componente2 = () => {
    return (
        <div className="flex absolute items-center justify-center bottom-0 w-[full]">
            {phoneInfo.map(item => (
                <div key={uuidv4()} className="bg-transparent relative pt-8">
                    <div 
                    className="absolute  top-14 h-[462px] rounded-lg left-[8rem] w-[225px]"
                    style={{backgroundColor:item.bg}}
                    >
                        <div className="flex w-fit mx-auto mt-4">
                            <span 
                            className="text-[40px]  font-bold font-inter"
                            style={{color:item.textColorSpan}}
                            >
                            {item.number}
                            </span>
                            <h3 className="text-[32px] font-quicksand font-bold mt-[6px]">{item.title}</h3>
                        </div>

                        <div>
                            <p className="ml-6 mt-6 text-[16px] font-quicksand absolute font-bold ">{item.description}</p>
                            <span className="font-quicksand bottom-10  font-extrabold ml-6 absolute mt-6"
                            >{item.span}</span>
                        </div>
                    </div>
                    <img
                        src="public/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (2) 1.png"
                        alt=""
                        className="relative z-50"
                    />
                </div>
            ))}
        </div>
    );
};
