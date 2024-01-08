"use client"
import React, {useState} from "react";
import styles from "@/components/email/email.module.css";
import Link from "next/link";


export default function EmailModal({id}:any) {
    const [modal, setModal] = useState(false);

    return <><span className={styles.more} onClick={() => setModal(!modal)}>...</span>
        {modal ? <Link className={styles.modal_content} href={`/document?id=${id}`}>открыть документ</Link> : null}
    </>
}