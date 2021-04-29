import AuthService from "@src/services/AuthService";
import { useMutation } from "react-query";

export const useAuth = () => {
  return useMutation(AuthService.oauth);
};
