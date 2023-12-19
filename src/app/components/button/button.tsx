"use client"
import React, {useState} from "react";
import styles from './inputa.module.css'
import Link from "next/link";
import {IButton} from "@/types/global";

export default function Button({
                                  style={},
                                  url = '',
                                  label = "",
                                  className="",
                                   onClick,
                                  ///value='',
                              }:IButton) {
    const [value, setValue] = useState("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <>
        <Link href={url} onClick={onClick} className={className} style={style}>{label}</Link>
    </>
}