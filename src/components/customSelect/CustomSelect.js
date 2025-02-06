"use client";
import {useEffect, useState } from "react";
import styles from './CustomeSelect.module.css';
export default function CustomSelect({options}){
    const [title,setTitle] = useState(options[0])
    const [active,setActive] = useState(false)
    const optionsClasses = active ? `${styles.selectOptions} ${styles.selectOptionsActive}` : `${styles.selectOptions}`

    function toggleOptions(){
        setActive(!active)
    }

    function optionSelect(option){
        if(option == title){
            toggleOptions()
            return    
        }
        setTitle(option)
        toggleOptions()
    }

    return <>
        <div className={styles.selectMainContainer}>
            <div onClick={toggleOptions} className={styles.optionsTitle}>
                <p>{title}</p> <img src="/arrow_down.svg" alt="arrow_down" />
            </div>
            <div className={optionsClasses}>
                {options.map((opt,index) => {
                    if(title == opt){
                        return <div key={index} onClick={()=>optionSelect(opt)} className={`${styles.options} ${styles.selectedOption}`}>
                                    <img src="/check.svg" alt="check" /><p className={styles.optionLabel}>{opt}</p>
                                </div>
                    }else{
                        return <div key={index} onClick={()=>optionSelect(opt)} className={styles.options}>
                                    <p className={styles.optionLabel}>{opt}</p>
                                </div>
                    }
                })}
            </div>
        </div>
    </>
}