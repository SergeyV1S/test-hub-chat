import { useNavigate } from "react-router-dom";

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
    <Button kind='outlined' size='icon' onClick={logout}>
      <img style={{ width: 13 }} src='/exit.svg' alt='trash_icon' />
    </Button>
  );
};
