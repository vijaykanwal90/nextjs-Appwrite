"use client";
import appwriteService from "@/appwrite/config";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/authContext";
import React, { useState, useEffect } from "react"

const ProtectedLayout = ({ children ,}: { children:React.ReactNode }) => {

    const [authStatus, setAuthStatus] = useState(false);
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        appwriteService.isLoggedIn()
            .then(setAuthStatus)
            .finally(() => setLoader(false));
    }, []);

    return <AuthProvider value={{ authStatus, setAuthStatus }}>

        
        
        {!loader && (
            <>
            <div className="text-primary"></div>
            <header/>
            <main className="px-2 py-2">{children}</main>
            </>
        )}
    </AuthProvider>

}

export default ProtectedLayout