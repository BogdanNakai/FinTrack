import "@/css/index.css";
import type { FC } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const TransactionsPage = lazy(
  () => import("@/pages/Transactions/TransactionsPage")
);
const ProfilePage = lazy(() => import("@/pages/Profile/ProfilePage"));
const LoginPage = lazy(() => import("@/pages/Login/LoginPage"));
const SingInPage = lazy(() => import("@/pages/SingIn/SingInPage"));
const ReportsPage = lazy(() => import("@/pages/Reports/ReportsPage"));
const GoalsPage = lazy(() => import("@/pages/Goals/GoalsPage"));
const BudgetPage = lazy(() => import("@/pages/Budget/BudgetPage"));
const DashboardPage = lazy(() => import("@/pages/Dashboard/DashboardPage"));

const App: FC = () => {
  return (
    <Routes>
      
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/transactions" element={<TransactionsPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/transactions" element={<TransactionsPage />}></Route>
        <Route path="/reports" element={<ReportsPage />}></Route>
        <Route path="/goals" element={<GoalsPage />}></Route>
        <Route path="/budget" element={<BudgetPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/singIn" element={<SingInPage />}></Route>
    </Routes>
  );
};

export default App;
