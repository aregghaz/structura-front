"use client"
import styles from '../page.module.css'
import React, {useState} from "react";
import Input from "../../../components/input/Input"
import Link from "next/link";
import Button from "@/components/button/button";
import {REG_API} from "@/api/registration";
import {setToken} from "@/lib/users/users";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function Login() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const handlerLogin = (key: string, value: string) => {
        setLogin((state) => {
            return {
                ...state,
                [key]: value
            }
        })
    }
    const handlerSubmit = async () => {
        const data = await REG_API.login(login)
        const {access_token} = data
        localStorage.setItem("access_token", access_token)

        dispatch(setToken(access_token))
        router.push('/')
        // console.log(data, 'datadata')
    }
    return (

        <>
            <div style={{textAlign: 'center', paddingTop: 30, paddingBottom: 60}}>
                <span className={styles.headerText1}>с помощью нас — вы сможете </span>
                <span className={styles.headerText1}
                      style={{textDecoration: 'underline', fontWeight: 700}}>анализировать</span>
                <span className={styles.headerText1}> любой документ с помощью искусственного интеллекта</span>
            </div>
            <div className={styles.formDiv} style={{backgroundColor: 'white'}}>

                <div>
                    <div className={styles.formText}>Авторизация
                    </div>
                    <div className={styles.formText2}>
                        введите необходимые данные, чтобы войти
                    </div>
                </div>
                <div style={{width: 510, height: 65, marginBottom: 20}}>
                    <Input
                        name={'email'}
                        label={'ваш электронный ящик'}
                        className="my-input"
                        handlerAction={handlerLogin}
                        style={{
                            width: 510,
                            height: 65,
                            borderRadius: 50,
                            border: '1px black solid'
                        }}
                    />
                </div>
                <div style={{width: 510, height: 65, marginBottom: 20}}>
                    <Input
                        name={'password'}
                        label={'ваш пароль'}
                        type={'password'}
                        className="my-input"
                        handlerAction={handlerLogin}
                        style={{
                            width: 510,
                            height: 65,
                            borderRadius: 50,
                            border: '1px black solid'
                        }}
                    />

                </div>
                <div className={styles.aut_btn}>
                    <div
                        style={{
                            width: 510,
                            height: 65,
                            background: 'linear-gradient(91deg, #101010 0%, #303030 100%)',
                            borderRadius: 50
                        }}
                    >
                        <Button
                            className={styles.aut_btn_text}
                            label={'авторизоваться'}
                            onClick={handlerSubmit}
                            url={``}
                        />
                    </div>

                </div>
                <div className={styles.regDiv}>
                    <div style={{
                        width: 75,
                        height: 0,
                        border: '0.50px black solid'
                    }}></div>
                    <div style={{width: 320, height: 50, textAlign: 'center'}}>
                    <span style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'Comfortaa',
                        fontWeight: '300',
                        wordWrap: 'break-word'
                    }}>если вы зарегистрированы,<br/>то нажмите здесь, чтобы </span>
                        <Link href={`/auth/registration`} className={styles.regButton}>перейти</Link>
                    </div>
                    <div style={{
                        width: 75,
                        height: 0,
                        border: '0.50px black solid'
                    }}></div>
                </div>
            </div>
        </>


    )
}
