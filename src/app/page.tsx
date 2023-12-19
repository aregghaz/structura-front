"use client"
import Header from "@/app/components/header/header";
import React, {useEffect} from "react";
import {tokenData} from "@/app/lib/users/users";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";

export default function Home() {
    const getToken = useSelector(tokenData)
    const router = useRouter()

    useEffect(() => {
        if (getToken.length === 0) {
            router.push('/auth/login')

        }
    }, [getToken])
    return (
        <>
            <Header/>
        </>
    )
}
