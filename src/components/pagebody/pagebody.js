'use client'
import styles from './pagebody.module.css';
import FilterBar from "../filterBar/filterBar";
import FilterOptions from "../filterOptions/filterOptions";
import ProductGrid from "../productGrid/productGrid";
import { useEffect, useState } from 'react';


export default function PageBody(){

    const [showFilters,setShowFilters] = useState(false)
    const gridClasses = showFilters ? styles.gridFilterContainer : styles.gridFilterContainerBody;
    const [productsList,setProductList] = useState([])
    
    function fetchProducts(){
        fetch(process.env.NEXT_PUBLIC_API_URL).
        then((res)=>res.json())
        .then((res) => setProductList(res))
    }

    function toggleFilters(){
        setShowFilters(!showFilters)
        console.log(showFilters)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return <>
        <FilterBar totalItems={productsList.length} toggleFilters={toggleFilters} />
        <div className={gridClasses}>
            <div className={styles.gridProductsElement}>
                <ProductGrid showFilters={showFilters} productsList={productsList}/>
            </div>
        </div>
    </>
}