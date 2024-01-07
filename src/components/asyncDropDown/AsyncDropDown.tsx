"use client"
import {useState} from "react";
import styles from './AsyncDropDown.module.css'
import Image from "next/image";
import {IAsyncDropDown, IDropDown, IUserInfo} from "@/types/global";

export const AsyncDropDown = ({
                                  data,
                                  label,
                                  open,
                                  setOpen,
                                  userData,
                                  icon = '',
                                  style = '',
                                  handlerAction,
                                  onClick,
                              }: IAsyncDropDown) => {
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);



    const handleItemClick = (id: number) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);

    }

    return (
        <div className={styles.dropdown} style={{borderRadius: 25}}>
            <div className={styles.dropdown_header} style={{borderRadius: 25}} onClick={(event) => {
                onClick()
            }}
            >
                {icon.length > 0 ? <Image width={25} height={25} src={icon} alt=""/> : ''}
                {label ? <span
                    className={styles.label}>{selectedItem ? items.find(item => item.id == selectedItem)?.label : label}</span> : ''}
                {label && (open ?
                    <Image width={10} className={styles.icon} height={10} src={'images/close.svg'} alt=""/> :
                    <Image className={styles.icon} width={10} height={10} src={'images/open.svg'} alt=""/>)}
            </div>
            <div className={`${styles.dropdown_body} ${style} ${open && styles.open}`}>
                <div>сторона-отправитель</div>
                {userData.map((item:IUserInfo, index:number) =>{
                    if(item.user_status === 'my' || item.user_status === 'my-third'){
                        return ( <div key={index} className={styles.dropdown_item} onClick={(event) => {
                            handleItemClick(item.id)
                            if (handlerAction) {
                                handlerAction(item.id, event)
                            }

                        }}>
                        <span
                            className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>• </span>
                            {item.users.name +' '+item.users.surname}
                        </div>)
                    }
                })}
                <div>сторона-получатель</div>
                {userData.map((item:IUserInfo, index:number) =>{
                    if(item.user_status === "other" || item.user_status === "other-third"){
                        return ( <div key={index} className={styles.dropdown_item} onClick={(event) => {
                            handleItemClick(item.id)
                            if (handlerAction) {
                                handlerAction(item.id, event)
                            }

                        }}>
                        <span
                            className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>• </span>
                            {item.users.name +' '+item.users.surname}
                        </div>)
                    }
                })}
                {items.map((item, index) => (
                    <div key={index} className={styles.dropdown_item} onClick={(event) => {
                        handleItemClick(item.id)
                        if (handlerAction) {
                            handlerAction(item.id, event)
                        }

                    }}>
                        <span
                            className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
