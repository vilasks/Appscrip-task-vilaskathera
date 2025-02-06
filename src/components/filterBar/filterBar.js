'use client'
import styles from './filterBar.module.css';
import CustomSelect from "../../utils/customSelect/CustomSelect";
import Icon from "../../utils/icon/icon";
import { useState } from 'react';

export default function FilterBar({toggleFilters,totalItems}){
    const [showFilters,setShowFilters] = useState(false)
    const filterOptions = ["RECOMMENDED","NEWSET FIRST","POPULAR","PRICE: HIGH TO LOW", "PRICE: LOW TO HIGH"]

    function handleClick(){
        toggleFilters()
        setShowFilters(!showFilters)
    }

    return <>
        <div className={styles.filterBarContainer}>
            <div className={styles.filtersLeft}>
                <div className={styles.filters}>
                    <div><p className="t18 bold700">{totalItems} ITEMS</p></div>
                    <div onClick={handleClick} className={styles.filtersShowHide}>
                        {showFilters ? 
                        <>
                        <Icon data="/arrowLeft.svg" alt="left arrow"/>
                        <p className="t16 t-secondary t-underline">HIDE FILTERS</p>
                        </>:
                        <> 
                        <Icon data="/arrowRight.svg" alt="right arrow"/>
                        <p className="t16 t-secondary t-underline">SHOW FILTERS</p>
                        </>
                        }
                    </div>
                </div>
                <div className={styles.filtersMobile}>
                    <p className="t14 bold700">FILTERS</p>
                </div>
            </div>
            <div>
                <CustomSelect options={filterOptions}/>
            </div>
        </div>
    </>
}