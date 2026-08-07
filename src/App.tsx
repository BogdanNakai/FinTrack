import "@/css/index.css";
import type { FC } from "react";
import { lazy} from "react";
import { Routes, Route } from "react-router-dom";


const TransactionsPage = lazy(() => import('@/pages/Transactions/TransactionsPage'));
const ProfilePage = lazy(() => import("@/pages/Profile/ProfilePage"));
const LoginPage = lazy(() => import("@/pages/Login/LoginPage"));
const SingInPage = lazy(() => import("@/pages/SingIn/SingInPage"));
const PageComp = lazy(() => import("@/pages/PageComponents/PageComp"));
const ReportsPage = lazy(() => import("@/pages/Reports/ReportsPage"));
const GoalsPage = lazy(() => import("@/pages/Goals/GoalsPage"));
const BudgetPage = lazy(() => import("@/pages/Budget/BudgetPage"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TransactionsPage />}></Route>
      <Route path="/page" element={<PageComp />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/singIn" element={<SingInPage />}></Route>
      <Route path="/transactions" element={<TransactionsPage />}></Route>
      <Route path="/reports" element={<ReportsPage />}></Route>
      <Route path="/goals" element={<GoalsPage />}></Route>
      <Route path="/budget" element={<BudgetPage />}></Route>
    </Routes>
  );
};

export default App;
