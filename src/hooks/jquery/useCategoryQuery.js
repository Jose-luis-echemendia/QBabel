import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCategory } from '../redux/useCategory';
import { toast } from 'sonner';


//obtenet categorya y crear la cache
export function useGetAllCategory() {
  const { handleGetCategories } = useCategory();

  return useQuery({
    queryKey: ['category'],
    queryFn: () => handleGetCategories(),
  });
}

//mutation para hacer update 
export function useUpdateCategory() {
  // te permite manejar los datos en cache
  const queryClient = useQueryClient();
  const { handleUpdateCategory } = useCategory();

  return useMutation({
    //Funcion que realiza la peticion
    mutationFn: ({ id, data }) => handleUpdateCategory(id, data),

    // para manajear los datos en cache y actualizar
    onMutate: ({ id, data }) =>
      queryClient.setQueryData(['category'], (old) => {
        if (Array.isArray(old)) {
          return old.map((c) => (c.id === id ? { ...c, ...data } : c));
        }
        if (old && Array.isArray(old.categories)) {
          return {
            ...old,
            categories: old.categories.map((c) =>
              c.id === id ? { ...c, ...data } : c
            ),
          };
        }

        return old;
      }),
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(['category'], ctx.previous);
      console.log(_err);
      toast.error('Error actualizando la categoría');
    },
    onSuccess: () => {
      toast.success('Categoría actualizada con éxito');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['category']);
    },
  });
}

//mutation para crear categoria
export function useCreateCategory() {
  const { handleCreateCategory } = useCategory();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => handleCreateCategory(data),

    onMutate: (newCategory) => {
      queryClient.setQueryData(['category'], (old) => {
        if (old && Array.isArray(old.categories)) {
          return {
            ...old,
            ...newCategory,
          };
        }
      });
    },
    onSuccess: () => toast.success('Categoria creada con exitos'),
    onError: (error) => toast.error('Ha ocurrido un error ', error),
    onSettled: () => queryClient.invalidateQueries(['category']),
  });
}
