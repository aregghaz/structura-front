"use client"
import React, {useState} from "react";
import styles from "@/components/email/email.module.css";
import Link from "next/link";


export default function EmailModal() {
    const [modal, setModal] = useState(false);

    return <><span className={styles.more} onClick={() => setModal(!modal)}>...</span>
        {modal ? <Link className={styles.modal_content} href={'/document/1'}>открыть документ</Link> : null}
    </>
}