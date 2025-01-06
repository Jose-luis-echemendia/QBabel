import { v4 as uuidv4 } from 'uuid';
import { PhoneCard } from './phone-card';
import { ImageDataPhone } from './images-data-phone';

const infoPhones = [
  {
    number: 1,
    title: 'Crea',
    description:
      'Comparte tu voz única y transforma tus ideas en relatos cautivadores. Encuentra recursos para dar vida a tu historia, explorando estilos y tramas. Deja que tus emociones guíen tu pluma y crea una narrativa auténtica.',
    span: '¡Escribe y deja tu huella en el mundo!',
    bg: 'bg-[#fff]',
    textColorSpan: 'text-[#EAD38D]',
  },
  {
    number: 2,
    title: 'Crece',
    description:
      'Descubre cómo crecer como escritor. Encuentra tu voz única, perfecciona tu estilo y experimenta con distintos géneros y técnicas. Cada palabra que escribas es un paso hacia tu evolución. ',
    span: '¡Deja que tu pasión por la escritura te impulse a alcanzar nuevas alturas!',
    bg: 'bg-[#644844]',
    textColorSpan: 'text-[#EAD38D]',
  },
  {
    number: 3,
    title: 'Construye',
    description:
      'Construye seguidores compartiendo tus historias y conectando con lectores apasionados. Usa nuestras herramientas para promocionar tu trabajo y mantener la interacción.    ',
    span: '¡Deja que tu escritura hable y observa cómo tu comunidad crece!',
    bg: 'bg-[#625453]',
    textColorSpan: 'text-[#FFFFFF]',
  },
];

export const NarrativeSteps = () => {
  return (
    <div className="flex relative  gap-24">
      {infoPhones.map(infoPhone => (
        <PhoneCard key={uuidv4()} {...infoPhone} />
      ))}
      <ImageDataPhone />
    </div>
  );
};
