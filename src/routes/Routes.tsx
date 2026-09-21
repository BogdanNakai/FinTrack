import "@/css/index.css";
import type { FC } from "react";
import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginPage from "@/pages/auth/LoginPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import Loading from "@/layouts/Loading";

const TransactionsPage = lazy(
  () => import("@/pages/transactions/TransactionsPage"),
);
const ProfilePage = lazy(() => import("@/pages/profile/ProfilePage"));
const ReportsPage = lazy(() => import("@/pages/reports/ReportsPage"));
const GoalsPage = lazy(() => import("@/pages/goals/GoalsPage"));
const BudgetPage = lazy(() => import("@/pages/budget/BudgetPage"));
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));

const RoutesComponent: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/transactions" element={<TransactionsPage />}></Route>
          <Route path="/reports" element={<ReportsPage />}></Route>
          <Route path="/goals" element={<GoalsPage />}></Route>
          <Route path="/budget" element={<BudgetPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
