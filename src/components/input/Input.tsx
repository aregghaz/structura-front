"use client"
import React, {useState} from "react";
import {IInput} from "@/types/global";

import {registration} from "@/lib/users/users";

import {AppDispatch, useAppDispatch} from "@/lib/store";
import {useDispatch} from "react-redux";

export default function Input({
                                  style,
                                  name,
                                  label = "",
                                  type = "text",
                                  className,
                                  register = false,
                                  handlerAction
                                  ///value='',
                              }: IInput) {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            onBlur={(e) => {
                if (handlerAction) {
                    handlerAction(name, e.target.value)
                }
                if (register) {
                    const value = e.target.value
                    const dataValue ={key:name, value:value}
                    dispatch(registration(dataValue))
                }
            }}
            onChange={(e) => {
                handleChange(e)
                ///changeHandler(e.target.value,name)
            }}
        />
    </>
}