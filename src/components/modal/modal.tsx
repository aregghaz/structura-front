"use client"
import React, {useState} from "react";
import styles from './modal.module.css'
import Input from "@/components/input/Input";
import Image from "next/image";
import {IModalEmail} from "@/types/global";
import {DOCUMENT_API} from "@/api/document";
import {useSelector} from "react-redux";
import {documentId} from "@/lib/document/document";

export default function Modal({showModal, setShowModal}: IModalEmail) {
    const docId = useSelector(documentId)

    const [state, setState] = useState('')
    const handlerSendAction = async () => {
        const data  = await DOCUMENT_API.sendEmail(state,docId)
        setShowModal(false)
    }
    const handlerSetEmail = (name:string, email:string) => {
       setState(email)
    }
    return showModal ? (
        <div className={styles.modal_content}>
            <h2 className={styles.header_text}>
                чтобы пригласить участника
                в этот документ,
                введите его электронный ящик

            </h2>
            <div>
                <Input handlerAction={handlerSetEmail} className={styles.input} label={'email'} name={'email'} type={'text'}/>
            </div>
            <div className={styles.button_section}>
                <button
                    className={styles.button}
                     onClick={handlerSendAction}
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
        </div>) : null
}