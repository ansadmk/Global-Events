import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";


export function useContactMutation() {
  return useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/contact", data);
    },
  });
}
