import styles from './newsLetter.module.css';
export default function NewsLetter(){
    return <>
        <div className={styles.newsLetterContainer}>
            <p className="t20 bold700 t-white">BE THE FIRST TO KNOW</p>
            <p className="t16 t-white">Sign up for updated from mettā muse.</p>
            <div className={styles.newsLetterInputContainer}>
                <input className={styles.newsLetterInput} type="text" placeholder="Enter your e-mail..." />
                <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
        </div>
    </>
}