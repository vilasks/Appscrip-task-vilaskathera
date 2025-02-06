'use client'
import styles from './footerAccordian.module.css';
import { useState } from "react";

export default function FooterAccordian({children,title,expandIcon,collpasedIcon}){

    const [expanded,setExpanded] = useState(false)
    const accordianClass = expanded ? `${styles.accordianWrapper} ${styles.accordianWrapperOpen}` : `${styles.accordianWrapper}`

    function handleClick(){
        setExpanded(!expanded)
    }


    return <>
        <div className={styles.accordianContainer}>
            <div onClick={handleClick} className={styles.aLabel}>
                <div>
                    <p style={{whiteSpace: 'nowrap'}} className="t18 bold700">{title}</p>
                </div>
                {expanded ? collpasedIcon : expandIcon}
            </div>
            <div className={accordianClass}>
                <div className={styles.accordianContent}>
                    {children}
                </div>
            </div>
        </div>
    </>
}
