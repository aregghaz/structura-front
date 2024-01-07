"use client"
import React, {useState} from "react";
import styles from './modal.module.css'
import Input from "@/components/input/Input";
import Image from "next/image";
import {IModalEmail} from "@/types/global";
import {DOCUMENT_API} from "@/api/document";
import {useDispatch, useSelector} from "react-redux";
import {documentId, setRefresh} from "@/lib/document/document";

export default function Modal({showModal, setShowModal}: IModalEmail) {
    const docId = useSelector(documentId)
    const dispatch = useDispatch();
    const [state, setState] = useState('')
    const [step, setStep] = useState(false)
    const [success, setSuccess] = useState(false)
    const handlerSendAction = async (userType: number) => {
        const data: any = await DOCUMENT_API.sendEmail(state, docId, userType)
        if (data.success) {
            setSuccess(true)
            dispatch(setRefresh(true))
        }
        setStep(false)
    }
    const handlerNextStep = async () => {
        setStep(true)

    }
    const handlerSetEmail = (name: string, email: string) => {
        setState(email)
    }
    return showModal ? (
        <div className={styles.modal_content}>
            {!success ? <><h2 className={styles.header_text}>
                чтобы пригласить участника
                в этот документ,
                введите его электронный ящик

            </h2>
                {
                    !step ? <>
                        <div>
                            <Input handlerAction={handlerSetEmail} className={styles.input} label={'email'}
                                   name={'email'}
                                   type={'text'}/>
                        </div>
                        <div className={styles.button_section}>
                            <button
                                className={styles.button}
                                onClick={handlerNextStep}
                            >
                                <Image src={'./images/check.svg'} width={25} height={25} alt=""/> отправить
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => setShowModal(false)}
                            >
                                <Image src={'./images/check.svg'} width={25} height={25} alt=""/> отменить
                            </button>
                        </div>
                    </> : <>
                        <div className={styles.button_section_type}>
                            <button
                                className={styles.button}
                                onClick={() => handlerSendAction(1)}
                            >
                                {/*<Image src={'./images/check.svg'} width={25} height={25} alt=""/> */}
                                моя сторона
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => handlerSendAction(2)}
                            >
                                {/*<Image src={'./images/check.svg'} width={25} height={25} alt=""/> */}
                                моя третья сторона
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => handlerSendAction(3)}
                            >
                                {/*<Image src={'./images/check.svg'} width={25} height={25} alt=""/> */}
                                другая сторона
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => handlerSendAction(4)}
                            >
                                {/*<Image src={'./images/check.svg'} width={25} height={25} alt=""/> */}
                                другая третья сторона
                            </button>
                        </div>
                    </>
                }</> : <>
                <h2 className={styles.header_text}>
                    вами успешно отправлено приглашение в этот документ!
                </h2>
                <div className={styles.button_section}>
                    <button
                        className={styles.button}
                        onClick={() => {
                            setShowModal(false)
                            setSuccess(false)
                        }}
                    >
                        <Image src={'./images/check.svg'} width={25} height={25} alt=""/> отправлено
                    </button>
                </div>
            </>}
        </div>) : null
}