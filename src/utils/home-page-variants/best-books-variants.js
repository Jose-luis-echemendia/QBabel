import { createContainerVariants, createChildrenVariants } from "../MotionVariants";


export const containerVariants = createContainerVariants({
  staggerChildren: 0.5, // Ajusta el retraso entre los hijos
  delayChildren: 0.2,   // Ajusta el retraso inicial para los hijos
});

export const childrenVariants = createChildrenVariants({
  yOffset: 20,          // Desplazamiento vertical inicial
  blurAmount: 4,        // Cantidad de desenfoque inicial
  duration: 1.0,        // Duración de la animación
});