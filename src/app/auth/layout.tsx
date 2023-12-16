import styles from "@/app/auth/page.module.css";
import React from "react";
import Image from "next/image";
import LOGO_SVG from "../../../public/images/logo.svg";

export default function AuthLayout({
                                       children, // will be a page or nested layout
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.headerDiv}>
                    <div className={styles.header}>
                        <span >structura</span>
                        <hr className={styles.br}></hr>
                    </div>


                    {/*<p className={styles.header}>*/}
                    {/*    structura*/}
                    {/*    <hr className={styles.br}></hr>*/}
                    {/*</p>*/}
                </div>

                {children}
                <div className={styles.logoDiv}>
                    <Image src={LOGO_SVG} alt=""/>
                </div>
            </div>

        </>
    )
}