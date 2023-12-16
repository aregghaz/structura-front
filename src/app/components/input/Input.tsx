"use client"
import React, {useState} from "react";
import styles from './inputa.module.css'
import {IInput} from "@/types/global";

export default function Input({
                                  style,
                                  name,
                                  label = "",
                                  type="text",
                                  className
                                  ///value='',
                              }:IInput) {
    const [value, setValue] = useState("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <>
        <input
            style={style}
            id={'input'}
            className={className}
            placeholder={label}
            name={name}
            type={type}
            value={value}
            onChange={(e) => {
                handleChange(e)
                ///changeHandler(e.target.value,name)
            }}
        />
    </>
}