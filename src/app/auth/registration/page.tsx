import styles from '../page.module.css'
import React from "react";
import Input from "../../../components/input/Input"
import Link from "next/link";
import Button from "@/components/button/button";

export default function Success() {

    return (
        <>
            <div style={{textAlign: 'center', paddingTop: 30, paddingBottom: 60}}>
                <span className={styles.headerText1}>введите ваш электронный ящик</span>
            </div>
            <div className={styles.body}>


                <div className={styles.formDiv} style={{backgroundColor: 'white'}}>

                    <div>
                        <div className={styles.formText}>Регистрация
                        </div>
                        <div className={styles.formText2}>
                            введите ваш электронный ящик
                        </div>
                    </div>
                    <div style={{width: 510, height: 65, marginBottom: 20}}>
                        <Input
                            name={'email'}
                            label={'электронный ящик'}
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
                                label={'зарегистрироваться'}
                                url={`/auth/registration/code_verification`}
                            />
                        </div>

                    </div>

                    <div className={styles.regDiv}>
                            <div style={{
                                width: 75,
                                height: 0,
                                border: '0.50px black solid'
                            }}/>
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

        </>)
}
