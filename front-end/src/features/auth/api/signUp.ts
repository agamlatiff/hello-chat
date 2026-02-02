import instanceApi from "../../../shared/utils/axios";

export const signUp = (data: FormData) => instanceApi.post("auth/sign-up", data, {headers: {
  "Content-Type": "multipart/form-data"
}}).then(res => res.data)