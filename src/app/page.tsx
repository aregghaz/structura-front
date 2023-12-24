"use client"
import Header from "@/components/header/header";
import React, {useEffect} from "react";
import {tokenData} from "@/lib/users/users";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import Layout from "@/components/layout/layout";

export default function Home() {
    const getToken = useSelector(tokenData)
    const router = useRouter()

    // useEffect(() => {
    //     if (getToken.length === 0) {
    //         router.push('/auth/login')
    //
    //     }
    // }, [getToken])
    return (
        <>
            <Layout>
                asds
            </Layout>
        </>
    )
}
