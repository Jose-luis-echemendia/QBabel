
export const CustomFooter = () => {
  return (
    <>  
      <div className="flex gap-10">
        <a className="text-white-100 hover:text-opacity-60 hover:cursor-pointer">Condiciones</a>
        <a className="text-white-100 hover:text-opacity-60 hover:cursor-pointer">Privacidad</a>
        <a className="text-white-100 hover:text-opacity-60 hover:cursor-pointer">Políticas de pagos</a>
        <a className="text-white-100 hover:text-opacity-60 hover:cursor-pointer">Accesibilidad</a>
        <a className="text-white-100 hover:text-opacity-60 hover:cursor-pointer">Ayuda</a>
        <div className="h-4 w-[2px] bg-primary"/>
        <span className="text-white-100">© 2025 QBabel</span>
      </div>
    </>
  )
}
