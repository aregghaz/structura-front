"use client"
import styles from '../../page.module.css'
import React from "react";
import Link from "next/link";
import Button from "@/components/button/button";
import {useSelector} from "react-redux";
import {userData} from "@/lib/users/users";

export default function Registration() {
    const regData = useSelector(userData)

    return (
        <>
            <div style={{textAlign: 'center', paddingTop: 30, paddingBottom: 60}}>
                <span className={styles.headerText1}>позволит вам </span>
                <span className={styles.headerText1}
                      style={{textDecoration: 'underline', fontWeight: 700}}>согласовывать</span>
                <span className={styles.headerText1}> любой документ</span>
            </div>
            <div className={styles.body}>


                <div className={styles.formDiv} style={{backgroundColor: 'white'}}>

                    <div>
                        <div className={styles.formText}>Регистрация завершена</div>
                        <div className={styles.formText2}>
                            {regData.name} {regData.surname}, поздравляем вас!
                            <br/>
                            Пожалуйста пройдите верификацию,
                            чтобы начать пользоваться всеми возможностями онлайн-документооборота
                        </div>
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
                                label={'продолжить'}
                                url={`/auth/login`}
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
                    }}>если вы верифицированы,<br/>то нажмите здесь, чтобы </span>
                            <Link href={`/auth/login`} className={styles.regButton}>перейти</Link>
                        </div>
                        <div style={{
                            width: 75,
                            height: 0,
                            border: '0.50px black solid'
                        }}></div>
                    </div>
                </div>


            </div>

        </>
    )
}
