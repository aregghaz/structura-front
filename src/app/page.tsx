"use client"
import Header from "@/components/header/header";
import React, {useEffect} from "react";
import {tokenData} from "@/lib/users/users";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import LeftNavBar from "@/components/navBar/left/leftNavBar";
import Body from "@/components/navBar/middle/body";
import RightNav from "@/components/navBar/right/rightNav";
import styles from './page.module.css'
export default function Home() {
    const getToken = useSelector(tokenData)
    const router = useRouter()
    useEffect(() => {
        const value = localStorage.getItem("access_token") || ""
        if (value.length === 0) {
            router.push('/auth/login')

        }
    }, [])
    return (
        <>
            <Header/>
            <div className={styles.body}>
                <LeftNavBar/>
                <Body/>
                <RightNav/>
            </div>

        </>
    )
}
