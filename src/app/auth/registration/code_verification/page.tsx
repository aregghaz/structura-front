import styles from '../../page.module.css'
import React from "react";
import Input from "../../../../components/input/Input"
import Link from "next/link";
import Button from "@/components/button/button";

export default function CodeVerification() {
    return (<>
            <div style={{textAlign: 'center', paddingTop: 30, paddingBottom: 60}}>
                <span className={styles.headerText1}>позволит вам </span>
                <span className={styles.headerText1}
                      style={{textDecoration: 'underline', fontWeight: 700}}>анализировать</span>
                <span className={styles.headerText1}> любой документ</span>
            </div>
        <div className={styles.body}>


            <div className={styles.formDiv} style={{ backgroundColor:'white'}}>

                <div >
                    <div className={styles.formText} >1 из 3 шагов регистрации
                    </div>
                    <div className={styles.formText2} >
                        введите отправленный код на ваш электронный ящик
                    </div>
                </div>
                <div style={{width: 510, height: 65, marginBottom:20}}>
                    <Input
                        name={'code'}
                        label={'код подтверждения'}
                        className="my-input"
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
                            url={`/auth/registration/profile`}
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

            {/*<div style={{width: 35, height: 35, left: 703, top: 740, position: 'absolute'}}>*/}
            {/*    <div style={{*/}
            {/*        width: 35,*/}
            {/*        height: 35,*/}
            {/*        left: 0,*/}
            {/*        top: 0,*/}
            {/*        position: 'absolute',*/}
            {/*        background: 'linear-gradient(135deg, black 0%, #252525 100%)'*/}
            {/*    }}></div>*/}
            {/*    <div style={{*/}
            {/*        width: 20.90,*/}
            {/*        height: 19.56,*/}
            {/*        left: 7.05,*/}
            {/*        top: 7.72,*/}
            {/*        position: 'absolute',*/}
            {/*        background: 'white'*/}
            {/*    }}></div>*/}
            {/*</div>*/}

        </div>
    </>

    )
}
