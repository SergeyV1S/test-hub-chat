import { useLocation, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { localStorageKeys, paths } from "@/shared/constants";
import { useLocalStorage } from "@/shared/hooks";

import { TSignInFormSchema, signInFormSchema } from "../lib";

export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const signInForm = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      name: "",
      password: ""
    }
  });

  const { setValueToLocalStorage } = useLocalStorage();

  const signIn = (data: TSignInFormSchema) => {
    setValueToLocalStorage(localStorageKeys.USER_DATA, JSON.stringify(data));
    navigate(location.state.from.pathname || paths.CHAT);
  };

  return { signIn, signInForm };
};
