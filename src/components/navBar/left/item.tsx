"use client"
import React, {useEffect, useState} from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import {useSelector} from "react-redux";
import {getLoading, getMenu} from "@/lib/menu/menu";

export default function ItemMenu({text, icon, id}) {
    const date = useSelector(getMenu)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(date, id, '222222')
        date.map((item) => {
            if (item.id === id) {
                setCount(item.count)
            }
        })
    }, [])
    return (<span>
                   <Image className={styles.image} width={19} height={19} src={icon} alt={text}/>
                   <span className={styles.text}>{text}</span>
                   <span className={styles.count}>{count}</span>
               </span>)
}