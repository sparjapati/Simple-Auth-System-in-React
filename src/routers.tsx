import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './auth/ProtectedRoute';
import React from "react";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

export const ROOT_PATH = '/home'

const router = createBrowserRouter([
    {
        path: ROOT_PATH,
        element: <ProtectedRoute><HomePage /></ProtectedRoute>,
    },
    {
        path: '/signIn',
        element: <SignInPage />,
    }
]);

export default router;
