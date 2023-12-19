"use client"
import styles from '../../page.module.css'
import React from "react";
import Input from "../../../components/input/Input"
import Link from "next/link";
import Button from "@/app/components/button/button";
import {REG_API} from "@/api/registration";
import {useSelector} from "react-redux";

export default function Passport() {

    const regData = useSelector((state:any) => state.users.user)

    const regUser = async () => {
        const data = await REG_API.registration(regData);
        console.log(data, 'datadatadatadata')
    }

    return (
        <>
            <div style={{textAlign: 'center', paddingTop: 30, paddingBottom: 60}}>
                <span className={styles.headerText1}>позволит вам </span>
                <span className={styles.headerText1}
                      style={{textDecoration: 'underline', fontWeight: 700}}>проверять</span>
                <span className={styles.headerText1}> любой документ</span>
            </div>
            <div className={styles.body}>


                <div className={styles.formDiv} style={{backgroundColor: 'white'}}>

                    <div>
                        <div className={styles.formText}>3 из 3 шагов регистрации
                        </div>
                        <div className={styles.formText2}>
                            введите свои данные: полностью и без сокращения
                        </div>
                    </div>
                    <div style={{width: 510, height: 65, marginBottom: 20}}>
                        <Input
                            name={'passport'}
                            label={'мой внутренний паспорт страны'}
                            className="my-input"
                            register={true}
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
                            name={'country'}
                            label={'страна выдачи паспорта'}
                            className="my-input"
                            register={true}
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
                            name={'passportNumber'}
                            label={'номер и серия паспорта'}
                            className="my-input"
                            register={true}
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
                                label={'подтвердить'}
                                url={`/auth/registration/success`}
                                onClick={regUser}
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
