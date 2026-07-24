import "@/css/index.css";
import type { FC } from "react";
import { lazy} from "react";
import { Routes, Route } from "react-router-dom";


const Transactions = lazy(() => import('@/pages/Transactions/Transactions'));
const Login = lazy(() => import("@/pages/Login/Login"));
const SingIn = lazy(() => import("@/pages/SingIn/SingIn"));
const PageComp = lazy(() => import("@/pages/PageComponents/PageComp"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Transactions />}></Route>
      <Route path="/page" element={<PageComp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/singIn" element={<SingIn />}></Route>
      <Route path="/transactions" element={<Transactions />}></Route>
    </Routes>
  );
};

export default App;
