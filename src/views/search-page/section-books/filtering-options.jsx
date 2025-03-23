import { useParams } from 'react-router-dom';

export const FilteringOptions = () => {
    const { criterion } = useParams();
  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
        <h6 className='text-3xl font-bold'>&quot;{criterion}&quot;</h6>
        <span className='text-sm text-gray-600 -mt-1'>395 resultados</span>
    </div>
  )
}
