"use client"
import {useState} from "react";
import styles from './dropDown.module.css'
import Image from "next/image";

export const Dropdown = ({
                             data,
                             label,
                             icon = '',
                             style = '',
                             handlerAction
                         }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown()
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_header} onClick={toggleDropdown}>
                {icon.length > 0 ? <Image width={25} height={25} src={icon} alt=""/> : ''}
                {label ? <span
                    className={styles.label}>{selectedItem ? items.find(item => item.id == selectedItem).label : label}</span> : ''}
                {label && (isOpen ?
                    <Image width={10} className={styles.icon} height={10} src={'images/close.svg'} alt=""/> :
                    <Image className={styles.icon} width={10} height={10} src={'images/open.svg'} alt=""/>)}
            </div>
            <div className={`${styles.dropdown_body} ${isOpen && styles.open}`}>
                {items.map((item, index) => (
                    <div key={index} className={styles.dropdown_item} onClick={() => {
                        handleItemClick(item.id)
                        if (handlerAction) {
                            handlerAction(item.id)
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
