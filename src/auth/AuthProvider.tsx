import { PropsWithChildren, createContext, useContext, useState } from "react";
import User from '../types/User'
import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const KEY_USER_DETAILS = "auth_details";

type AuthContextProps = {
    user?: User
    signIn: () => void
    signOut: () => void
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (authContext === undefined) {
        throw new Error("useAuth must be used with AuthProvider");
    }

    return authContext;
};



type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useLocalStorage<User | undefined>(KEY_USER_DETAILS);

    const signIn = () => {
        setUser({ id: '1234' });
    }

    const signOut = () => {
        setUser(undefined);
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
};

export default AuthProvider;