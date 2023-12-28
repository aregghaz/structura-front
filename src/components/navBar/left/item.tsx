"use client"
import React, {useEffect, useState} from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getLoading, getMenu, setLoading} from "@/lib/menu/menu";
import {useRouter} from "next/navigation";
import {pageName} from "@/types/page_name";

export default function ItemMenu({text, icon, id}) {
    const date = useSelector(getMenu)
    const [count, setCount] = useState(0)
    const loading = useSelector(getLoading)
    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(() => {
        if(date.length > 0){
            date.map((item) => {
                if (item.id === id) {
                    setCount(item.count)
                }
            })
        }
    }, [date.length,loading])
    return (<span onClick={() => router.push(`/page/${pageName[id]}`)}>
                   <Image className={styles.image} width={19} height={19} src={icon} alt={text}/>
                   <span className={styles.text}>{text}</span>
                   <span className={styles.count}>{count}</span>
               </span>)
}