import type { IUser } from "@/types/user.types";
import { Outlet, Navigate } from "react-router-dom";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";

const { USERS, ACTIVE_USER_ID } = STORAGE_KEYS;

const ProtectedRoutes = () => {
  const userId: string = getStorage(ACTIVE_USER_ID, "");
  const users: IUser[] = getStorage(USERS, []);

  const findIdUser = users.find((user) => {
    return user.id === userId;
  });

  if (!findIdUser) {
    return <Navigate replace to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
