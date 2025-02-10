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
    src: '/assets/images/home/explota_talento/cropped_image.png',
    textColorSpan: 'text-[#644844]',
    descriptionColor: 'text-[#000000]',
  },
  {
    number: 2,
    title: 'Crece',
    description:
      'Descubre cómo crecer como escritor. Encuentra tu voz única, perfecciona tu estilo y experimenta con distintos géneros y técnicas. Cada palabra que escribas es un paso hacia tu evolución. ',
    span: '¡Deja que tu pasión por la escritura te impulse a alcanzar nuevas alturas!',
    src: '/assets/images/home/explota_talento/cropped_image_644844.png',
    textColorSpan: 'text-[#EAD38D]',
    descriptionColor: 'text-[#FFFFFF]',
  },
  {
    number: 3,
    title: 'Construye',
    description:
      'Construye seguidores compartiendo tus historias y conectando con lectores apasionados. Usa nuestras herramientas para promocionar tu trabajo y mantener la interacción.    ',
    span: '¡Deja que tu escritura hable y observa cómo tu comunidad crece!',
    src: '/assets/images/home/explota_talento/cropped_image_625453.png',
    textColorSpan: 'text-[#FFFFFF]',
    descriptionColor: 'text-[#EAD38D]',
  },
];

export const NarrativeSteps = () => {
  return (
    <div className="flex w-fit  gap-24 relative mx-auto mt-4 pl-4">
      {infoPhones.map(infoPhone => (
        <PhoneCard key={uuidv4()} {...infoPhone} />
      ))}

      <ImageDataPhone />
    </div>
  );
};
