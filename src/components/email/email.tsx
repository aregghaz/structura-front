'use client'
import styles from "./email.module.css";
import React, {useEffect, useState} from "react";
import {IMailList, IPage} from "@/types/global";
import {DOCUMENT_API} from "@/api/document";
import {timestampToDate} from "@/utils/utils";
import {documentStatus} from "@/types/page_name";
import Image from "next/image";
import EmailModal from "@/components/modal/emailModal";

export const Email = ({pageId}: IPage) => {
    const local = 'ru'
    const [state, setState] = useState([]);
    const getData = async () => {
        ////FIXME ADD TYPE OF DATA
        const data: any = await DOCUMENT_API.getEmails(pageId)
        setState(data)
    }
    useEffect(() => {
        getData()
    }, [])


    return state.length > 0 ? (<>
        <div className={styles.document}>
            {state.map((item: IMailList, index: number) => {
                return (<div key={index} className={styles.document_item}>
                    <div className={styles.document_body}>
                        <span className={styles.user_section}>
                            <span>
                                <Image src={'/images/userCircle.svg'} width={35} height={35} alt={'userCircle'}/>
                                <Image src={'/images/userCircle.svg'} width={35} height={35} alt={'userCircle'}/>
                                <Image src={'/images/userCircle.svg'} width={35} height={35} alt={'userCircle'}/>
                                <Image src={'/images/userCircle.svg'} width={35} height={35} alt={'userCircle'}/>
                                <Image src={'/images/userCircle.svg'} width={35} height={35} alt={'userCircle'}/>
                            </span>
                        <EmailModal/>
                        </span>
                        <span className={styles.subject}>{item.subject}</span>
                        <span style={{
                            backgroundColor: documentStatus[item.status]['color'],
                            height: 10,
                            width: 10,
                            borderRadius: 10
                        }}></span>
                        <span><span className={styles.email_text}>статус:</span>  <span
                            className={styles.email_text_underline}>{documentStatus[item.status][local]}</span></span>
                        <span><span className={styles.email_text}>дата последнего действия с документом:</span> <span
                            className={styles.email_text_underline}>{timestampToDate(item.updated_at)}</span></span>
                    </div>
                    <div className={styles.notes}></div>
                </div>)
            })}

        </div>
    </>) : (<>no emails</>)
}