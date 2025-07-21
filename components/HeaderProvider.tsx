"use client"
import { SessionProvider } from "next-auth/react";
import { Header } from "./Header";


export default function HeaderProvider(){
    return <SessionProvider>
        <Header/>
    </SessionProvider>
}