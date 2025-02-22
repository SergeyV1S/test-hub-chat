import { useLocation, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { localStorageKeys, paths } from "@/shared/constants";

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

  const signIn = (data: TSignInFormSchema) => {
    localStorage.setItem(localStorageKeys.USER_DATA, JSON.stringify(data));
    navigate(location.state.from.pathname || paths.CHAT);
  };

  return { signIn, signInForm };
};
