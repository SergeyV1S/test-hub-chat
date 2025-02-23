import { useNavigate } from "react-router-dom";

import { LogOut } from "lucide-react";

import { localStorageKeys, paths } from "@/shared/constants";
import { useLocalStorage } from "@/shared/hooks";
import { Button } from "@/shared/ui";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const { removeValueFromLocalStorage } = useLocalStorage();

  const logout = () => {
    removeValueFromLocalStorage(localStorageKeys.USER_DATA);
    navigate(paths.SIGNIN);
  };

  return (
    <Button kind='ghost' size='icon' onClick={logout}>
      <LogOut size={18} color='var(--destructive-color)' />
    </Button>
  );
};
