import { useMutation } from "@tanstack/react-query"
import { signUp } from "../api/signUp"

export const useSignUp = () => {
  const {mutateAsync, isPending, isError, error} = useMutation({
    mutationFn: (data: FormData) => signUp(data)
  })
  
  return {
    mutateAsync, 
    isPending, 
    isError,
    error
  }
}