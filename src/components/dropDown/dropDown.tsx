"use client"
import {useState} from "react";
import styles from './dropDown.module.css'
import Image from "next/image";
import {IDropDown} from "@/types/global";
import {string} from "prop-types";

export const Dropdown = ({
                             data,
                             label,
                             icon = '',
                             style = '',
                             handlerAction,
                             onClick,
                         }: IDropDown) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id:number) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown()
    }

    return (
        <div className={styles.dropdown}  style={{borderRadius:25}}>
            <div className={styles.dropdown_header} style={{borderRadius:25}} onClick={(event) => {
                if (onClick) {
                    onClick(event)
                }else{
                    toggleDropdown()
                }
            }}
            >
                {icon.length > 0 ? <Image width={25} height={25} src={icon}  alt=""/> : ''}
                {label ? <span
                    className={styles.label}>{selectedItem ? items.find(item => item.id == selectedItem)?.label : label}</span> : ''}
                {label && (isOpen ?
                    <Image width={10} className={styles.icon} height={10} src={'images/close.svg'} alt=""/> :
                    <Image className={styles.icon} width={10} height={10} src={'images/open.svg'} alt=""/>)}
            </div>
            <div className={`${styles.dropdown_body} ${style} ${isOpen && styles.open}`}>
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
