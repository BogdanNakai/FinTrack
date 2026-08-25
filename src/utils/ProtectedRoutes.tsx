import type { IUser } from "@/types/user.types";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
	const userId = localStorage.getItem("userId");
	const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

	const findIdUser = users.find(
		(user) => user.id === userId
	);

	return findIdUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes