
import styles from './productGrid.module.css';
import ProductCard from '../productCard/productCard';
import FilterOptions from '../filterOptions/filterOptions';

export default function ProductGrid({productsList,showFilters}){
    
    return <>
        <div className={styles.productsGridContainer}>
            {showFilters ? <div className={styles.filtersElement}>
                <FilterOptions/>
            </div>: ''}
            {productsList && productsList.map((product,index) => {
                        return <ProductCard productData={product} key={product.id}/>
            })}
        </div>
    </>

}
