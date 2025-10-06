import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useComment } from "../redux/useComment";
import { toast } from "sonner";

//obtenet comment y crear la cache
export function useGetCommentFromBook(pkBook) {
  const { handleGetComments } = useComment();

  return useQuery({
    queryKey: ["comment", pkBook],
    queryFn: () => handleGetComments(pkBook),
  });
}

//mutation para crear categoria
export function useCreateComment() {
  const { handleCreateComment } = useComment();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => handleCreateComment(data),

    onMutate: (newComment) => {
      queryClient.setQueryData(["comment"], (old) => {
        if (old && Array.isArray(old.categories)) {
          return {
            ...old,
            ...newComment,
          };
        }
      });
    },
    onSuccess: () => toast.success("Gracias por opinar sobre el libro"),
    onError: (error) => toast.error("Ha ocurrido un error ", error),
    onSettled: () => queryClient.invalidateQueries(["comment"]),
  });
}
