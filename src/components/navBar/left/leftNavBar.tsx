"use client"
import React, {useEffect} from "react";
import styles from "./navbar.module.css"
import {DOCUMENT_API} from "@/api/document";
import ItemMenu from "@/components/navBar/left/item";
import {useDispatch, useSelector} from "react-redux";
import {getLoading, setLoading, setMenu} from "@/lib/menu/menu";

export default function LeftNavBar() {
    const dispatch = useDispatch()
    const loading = useSelector(getLoading)
    const getDocuments = async () => {
        const data: any = await DOCUMENT_API.get()
        dispatch(setMenu(data))
        dispatch(setLoading(false))
    }
    useEffect(() => {
        if (loading) {
            getDocuments()
        }

    }, [loading])

    return <div className={styles.body}>
        <h2>Документы</h2>
        {/*<ul >*/}
        <div className={styles.menuList}>
            <ItemMenu
                id={10}
                icon={'/images/shareFat.svg'}
                text={'Входящие'}
                // data={state}
            />
            <ItemMenu
                id={11}
                icon={'/images/fireSimple.svg'}
                text={'Горящие'}
                // data={state}
            />
            <ItemMenu
                id={12}
                icon={'/images/vector.svg'}
                text={'Исходящие'}
                //  data={state}
            />
            <ItemMenu
                id={1}
                icon={'/images/star.svg'}
                text={'Важные'}
                //  data={state}
            />
            <ItemMenu
                id={2}
                icon={'/images/clipboard.svg'}
                text={'Черновые'}
                // data={state}
            />
            <ItemMenu
                id={3}
                icon={'/images/vector2.svg'}
                text={'Шаблонные'}
                // data={state}
            />
            <ItemMenu
                id={4}
                icon={'/images/trashSimple.svg'}
                text={'Корзина'}
                /// data={state}
            />

        </div>

        {/*</ul>*/}
    </div>
}