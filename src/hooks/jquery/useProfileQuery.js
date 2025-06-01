import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useProfile } from "../redux/useProfile";
import { useAuth } from "../redux/useAuth";
import { toast } from "sonner";

export function useGetAllProfile() {
  const { handleGetProfiles } = useProfile();

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => handleGetProfiles(),
  });
}

export function useGetAuthenticatedUserProfile() {
  const { handleGetAuthenticatedUserProfile } = useAuth();

  return useQuery({
    queryKey: ["profile", "me"],
    queryFn: handleGetAuthenticatedUserProfile,
    enabled: false, // 🚫 NO se ejecuta automáticamente
  });
}

export function useUpdateProfile() {
  // te permite manejar los datos en cache
  const queryClient = useQueryClient();
  const { handleUpdatePartialProfile } = useProfile();
  const { refetch } = useGetAuthenticatedUserProfile();

  return useMutation({
    //Funcion que realiza la peticion
    mutationFn: ({ id, data }) => handleUpdatePartialProfile(id, data),

    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData(["profile"], ctx.previous);
      console.log(_err);
      toast.error("Error actualizando el perfil");
    },
    onSuccess: async () => {
      await refetch();
      toast.success("Perfil actualizado con éxito");
    },
    onSettled: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });
}
