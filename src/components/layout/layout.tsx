
import styles from "./layout.module.css";
import React from "react";
import Header from "@/components/header/header";
import LeftNavBar from "@/components/navBar/left/leftNavBar";
import Body from "@/components/navBar/middle/body";
import RightNav from "@/components/navBar/right/rightNav";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header/>
            <div className={styles.body}>
                <LeftNavBar/>
                <Body>  {children}</Body>
                <RightNav/>
            </div>
        </>
    )
}
