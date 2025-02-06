import Icon from '../icon/icon';
import LikeBtn from '../llikeBtn/likeBtn';
import styles from './productCard.module.css';
export default function ProductCard({productData}){
    const {title,image} = productData;
    return <>
        <div className={styles.productCardContainer}>
            <div className={styles.productImageContainer}>
                <img className={styles.productImageSize} src={image} alt={title} />
                {productData.id == 2 || productData.id == 4 ? <><div className={styles.outOfStock}>
                </div>
                <button className={styles.outOfStockBtn}>OUT OF STOCK</button></> : ''}
            </div>
            <div>
                <p className="text-clip t-primary t18">{title}</p>
                <div className={styles.productDetailsContainer}>
                    <p className="t-secondary t-14"><span className="t-underline p-cursor">Sign in</span> or Create an account to see pricing</p>
                    <LikeBtn/>
                </div>
            </div>
        </div>
    </>
}