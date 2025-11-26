import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";


export function useRegistrationMutation() {
  return useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/register", data);
    },
  });
}
