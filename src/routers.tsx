import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './auth/ProtectedRoute';
import React from "react";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute><HomePage /></ProtectedRoute>,
    },
    {
        path: '/signIn',
        element: <SignInPage />,
    }
]);

export default router;
