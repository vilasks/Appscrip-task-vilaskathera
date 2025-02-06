'use client'
import styles from './accordian.module.css';
import { useState } from "react";

export default function Accordian({title,expandIcon,collpasedIcon,options}){

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
                    <p style={{whiteSpace: 'nowrap'}} className="t18">All</p>
                </div>
                {expanded ? collpasedIcon : expandIcon}
            </div>
            <div className={accordianClass}>
                <div className={styles.accordianContent}>
                    <p className="t16 t-secondary t-underline p-cursor">Unselect all</p>
                    {options.map((opt,index) => {
                        return <div key={index} className={styles.accordianOption}>
                            <input style={{width:'18px', height:'18px'}} type='checkbox' id={opt.value} name={opt.value} value={opt.value}/>
                            <label className="t16 t-cursor" htmlFor={opt.value}>{opt.title}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}
