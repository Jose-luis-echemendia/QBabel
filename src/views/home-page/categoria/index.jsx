import { schemaImagesCategoria } from "./images-categoria"
import { Card } from "./card"
const Categoria = () => {
  return (
    <div>
      <div className=" flex gap-4 w-full ">
      {
        schemaImagesCategoria.map((item,)=>(
          <Card src={item.src} alt={item.alt} text={item.alt} />
        ))
      }
      </div>
    </div>
  )
}

export default Categoria;