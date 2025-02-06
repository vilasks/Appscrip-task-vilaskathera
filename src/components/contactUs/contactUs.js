import styles from './contactUs.module.css';
export default function ContactUs(){
    return <div className={styles.contactUsContainer}>
        <p className="t20 bold700 t-white">CONTACT US</p>
        <p className="t16 t-white">+44 221 133 5360</p>
        <p className="t16 t-white">customercare@mettamuse.com</p>
        <div className={styles.currencyContainer}>
            <p className="t20 t-white bold700">CURRENCY</p>
            <p className="t16 t-white bold700"><img src="/america.svg" style={{height:'24px',width:'24px',display:'inline'}} alt="america" /><span style={{position:'absolute'}}>.USD</span></p>
        </div>
        <p className="t12 t-secondary">Transactions will be completed in Euros and a currency reference is available on hover.</p>
    </div>
}