"use client"
import {useState} from "react";
import styles from './AsyncDropDown.module.css'
import Image from "next/image";
import {IAsyncDropDown, IUserInfo, IUsersEmails} from "@/types/global";
import {statusUser} from "@/utils/utils";

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

    const returnUsersIcon = (status:number) => {
        return (<Image src={`/images/status2.svg`} style={{opacity:status===1 ? 0.5 : 1}} width={25} height={25} alt={'status1'}/>)
    }
    const returnUsers = (item:IUsersEmails, index:number) => {

        return (<div key={index} className={styles.dropdown_item} onClick={(event) => {
            handleItemClick(item.id)
            if (handlerAction) {
                handlerAction(item.id, event)
            }
        }}>
            {returnUsersIcon(statusUser(item.users.status))}
                 <span
                     className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>
                 </span>
            {item.users.name ? item.users.name + ' ' + item.users.surname : item.users.email}
        </div>)
    }

    return (
        <div className={styles.dropdown} style={{borderRadius: 25}}>
            <div className={styles.dropdown_header}
                 style={{borderRadius: 25}}
                 onClick={(event) => {
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
                <div className={styles.opt_grup}>сторона-отправитель</div>
                {userData.map((item: IUserInfo, index: number) => {
                    if (item.user_status === 'my' || item.user_status === 'my-third') {
                        return returnUsers(item, index)
                    }
                })}
                <div className={styles.opt_grup}>сторона-получатель</div>
                {userData.map((item: IUserInfo, index: number) => {
                    if (item.user_status === "other" || item.user_status === "other-third") {
                        return returnUsers(item, index)
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
                            className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>
                        </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
