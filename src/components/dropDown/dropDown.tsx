"use client"
import { useState, useEffect } from "react";
import styles from './dropDown.module.css'
import Image from "next/image";

export const Dropdown = ({
                             data,
                             label,
                             icon=''
}) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_header} onClick={toggleDropdown}>
                {icon.length >0 ? <Image width={25} height={25} src={icon} alt="" /> : ''}
                <span className={styles.label} >{selectedItem ? items.find(item => item.id == selectedItem).label : label}</span>
                {isOpen ? <Image width={10} className={styles.icon} height={10} src={'images/close.svg'} alt="" /> : <Image className={styles.icon} width={10} height={10} src={'images/open.svg'} alt="" /> }
            </div>
            <div className={`${styles.dropdown_body} ${isOpen && styles.open}`}>
                {items.map((item, index) => (
                    <div key={index} className={styles.dropdown_item} >
                        <span className={`${styles.dropdown_item_dot} ${item.id == selectedItem && styles.selected}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
