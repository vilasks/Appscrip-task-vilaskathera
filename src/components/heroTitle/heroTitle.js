import styles from './heroTitle.module.css';
export default function HeroTitle(){
    return <>
        <div className={styles.heroSectionContainer}>
            <div className={styles.heroSection}>
                <p className={`${styles.heroFont} bold400`}>DISCOVER OUR PRODUCTS</p>
                <p className={`${styles.heroFooterFont} bold400`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis et saepe voluptas numquam temporibus animi voluptatem! Aperiam nemo ducimus alias. Perspiciatis natus in at similique odit tempore fugit consequuntur omnis.</p>
            </div>
        </div>
    </>
}