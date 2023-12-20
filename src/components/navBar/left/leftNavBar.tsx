"use cspanent"
import React from "react";
import styles from "./navbar.module.css"
import Image from "next/image";

export default function LeftNavBar() {
const count = 0
    return <div className={styles.body}>
        <h2>Документы</h2>
        {/*<ul >*/}
           <div className={styles.menuList}>
               <span>
                   <Image className={styles.image} width={19} height={19} src={'images/shareFat.svg'} alt={'shareFat'}/>
                   <span className={styles.text}>Входящие</span>
                   <span className={styles.count}>{count}</span>
               </span>
               <span><Image className={styles.image} width={19} height={19} src={'images/fireSimple.svg'} alt={'fireSimple'}/><span className={styles.text}>Горящие</span>  <span className={styles.count}>{count}</span></span>
               <span><Image className={styles.image} width={19} height={19} src={'images/vector.svg'} alt={'vector'}/><span className={styles.text}>Исходящие</span>  <span className={styles.count}>{count}</span></span>
               <span><Image className={styles.image} width={19} height={19} src={'images/star.svg'} alt={'star'}/><span className={styles.text}>Важные</span>  <span className={styles.count}>{count}</span></span>
               <span><Image className={styles.image} width={19} height={19} src={'images/clipboard.svg'} alt={'clipboard'}/><span className={styles.text}>Черновые</span>  <span className={styles.count}>{count}</span></span>
               <span><Image className={styles.image} width={19} height={19} src={'images/vector2.svg'} alt={'vector2'}/><span className={styles.text}>Шаблонные</span>  <span className={styles.count}>{count}</span></span>
               <span><Image className={styles.image} width={19} height={19} src={'images/trashSimple.svg'} alt={'trashSimple'}/><span className={styles.text}>Корзина</span>  <span className={styles.count}>{count}</span></span>
           </div>

        {/*</ul>*/}
    </div>
}