"use client"
import React from "react";
import styles from "./header.module.css"
import Image from "next/image";
import Button from "@/app/components/button/button";

export default function Header() {

    return <div className={styles.header}>
        <div className={styles.logo}>
            <div className={styles.label}>
                {/*<Image width={150} height={15} src={'./logo.png'}/>*/}

                <div className={styles.text_wrapper}>structura</div>
            </div>
            <div className={styles.text_under_logo}>умный и безопасный <br/>
                онлайн-документооборот
            </div>

        </div>
        <div className={styles.button_div}>
            <div className={styles.create}>
                <div>
                    <Image src={'./images/create.svg'} width={25} height={25} alt={'create'}/>
                    <Button
                        className={styles.button}
                        url={'create'}
                        label={'создать документ'}

                    />
                </div>
            </div>
            <div className={styles.create}>
                <div>
                    <Image src={'./images/upload.svg'} width={25} height={25} alt={'upload'}/>
                    <Button
                        className={styles.button}
                        url={'upload'}
                        label={'загрузить документ'}

                    />
                </div>

            </div>
            <div className={styles.search}>
                <div>
                    <Image src={'./images/search.svg'} width={25} height={25} alt={'upload'}/>

                    <Button
                        className={styles.button}
                        url={'find'}
                        label={'найти документ по похожим словам'}

                    />
                </div>

            </div>
            <div className={styles.profile}>
                <div>
                    <Image src={'./images/user.svg'} width={25} height={25} alt={'upload'}/>

                    <Button
                        className={styles.profileButton}
                        url={'find'}
                        label={'мой кабинет'}

                    />
                </div>

            </div>
        </div>
    </div>
}