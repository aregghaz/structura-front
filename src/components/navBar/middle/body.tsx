"use client"
import React from "react";
import styles from "./body.module.css"

export default function Body({
                                 children,
                             }: {
    children: React.ReactNode
}) {
const count = 0
    return <div className={styles.body}>
        {children}
    </div>
}