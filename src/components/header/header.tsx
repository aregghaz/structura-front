"use client"
import React, {useEffect} from "react";
import styles from "./header.module.css"
import Image from "next/image";
import Button from "@/components/button/button";
import {REG_API} from "@/api/registration";
import {useDispatch, useSelector} from "react-redux";
import {setUserId, tokenData} from "@/lib/users/users";
import {useRouter} from "next/navigation";
import axios from "axios";
import {DOCUMENT_API} from "@/api/document";

export default function Header() {
    const getToken = useSelector(tokenData)
    const router = useRouter();
    const dispatch = useDispatch()
//
    const getUser = async () => {
        const data: any = await REG_API.getUser()
        console.log(data,'datadata')
        let id = data.id
        dispatch(setUserId(id))
    }
    useEffect(() => {
        const access_token =  localStorage.getItem("access_token")
        if (getToken.length === 0 && access_token?.length === 0) {
            router.push('/auth/login')

        } else {
            axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
            getUser();
        }
    }, [])

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
                    <Image src={'/images/create.svg'} width={25} height={25} alt={'create'}/>
                    <Button
                        className={styles.button}
                        url={'/create'}
                        label={'создать документ'}

                    />
                </div>
            </div>
            <div className={styles.create}>
                <div>
                    <Image src={'/images/upload.svg'} width={25} height={25} alt={'upload'}/>
                    <Button
                        className={styles.button}
                        url={'/upload'}
                        label={'загрузить документ'}

                    />
                </div>

            </div>
            <div className={styles.search}>
                <div>
                    <Image src={'/images/search.svg'} width={25} height={25} alt={'upload'}/>

                    <Button
                        className={styles.button}
                        url={'/search'}
                        label={false ? 'найти документ по похожим словам' : (`найти документ по похожим словам`).substring(0, 3)+`...`}

                    />
                </div>

            </div>
        </div>
        <div className={styles.profile_div}>

            <div className={styles.profile}>
                <div>
                    <Image src={'./images/user.svg'} width={25} height={25} alt={'upload'}/>

                    <Button
                        className={styles.profileButton}
                        url={'/profile'}
                        label={'мой кабинет'}

                    />
                </div>

            </div>
        </div>
    </div>
}