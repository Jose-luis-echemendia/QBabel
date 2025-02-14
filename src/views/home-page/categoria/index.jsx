  import { schemaImagesCategoria } from "./images-categoria"
  import { Card } from "./card"
  import { motion } from "framer-motion"
  const Categoria = () => {
    return (
      <div className="border border-gray-400 bg-gray-200 ">
        <motion.div
        initial={{ x: 0 }}
        animate={{x:'-100%'}}
        transition={{duration:26, repeat: Infinity, ease:"linear",}}

        
        className=" flex gap-4 flex-nowrap min-w-max ">
        {
          schemaImagesCategoria.map((item,)=>(
            <Card src={item.src} alt={item.alt} text={item.alt} />
          ))
        }
        </motion.div>
      </div>
    )
  }

  export default Categoria;