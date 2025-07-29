import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import Home from "../home";
import Register from "../auth/register";
import Login from "../auth/login";
import Dashboard from "../admin/dashboard";
import UsersIndex from "../admin/users";
import UserCreate from "../admin/users/create";
import UserEdit from "../admin/users/edit";

export default function AppRoutes() {
  const auth = useContext(AuthContext);
  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* ✅ Tambahkan ini */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/users"
        element={
          isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/users/create"
        element={
          isAuthenticated ? <UserCreate /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/users/edit/:id"
        element={
          isAuthenticated ? <UserEdit /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}
