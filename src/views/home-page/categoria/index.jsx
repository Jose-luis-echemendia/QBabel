import { useState, useEffect } from "react";
import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

const Categoria = () => {
  const FAST_SPEED = 40; 
  const SLOW_SPEED = 100; 

  const [duration, setDuration] = useState(FAST_SPEED); 
  const [mustFinish, setMustFinish] = useState(false); 
  const [rerender, setRerender] = useState(false); 

  let [ref, { width }] = useMeasure(); 
  const xTranslation = useMotionValue(0); 

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; 

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop?.();
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="w-full overflow-hidden relative">
      <h1 className="text-center py-3 mt-10 text-[45px] font-quicksand font-bold">
        Categoria
      </h1>


      <motion.div
        className="flex gap-6 flex-nowrap min-w-max hover:cursor-pointer"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_SPEED); 
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_SPEED); 
        }}
      >
        {[...schemaImagesCategoria, ...schemaImagesCategoria].map((item, index) => (
          <Card key={index} src={item.src} alt={item.alt} text={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};

export default Categoria;
