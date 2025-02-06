import styles from './linkItem.module.css';

export default function LinkItem({text}){
    return <div className={styles.linkContainer}>
                <a className="t20 bold700 t-primary" style={{textDecoration: 'none'}} href='#'>{text}</a>
                <div className={styles.linkUnderline}></div>
            </div>
}