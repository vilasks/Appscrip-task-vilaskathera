import styles from './footer.module.css'
import ContactUs from "../contactUs/contactUs";
import NewsLetter from "../newsLetter/newsLetter";
import FooterLinks from '../footerLinks/footerLinks';
import QuickLinks from '../quickLinks/quickLinks';
import FollowUs from '../followUs/followUs';
import PaymentMethods from '../paymentMethods/paymentMethods';

export default function Footer(){
    return <>
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <NewsLetter/>
                <ContactUs/>
            </div>
            <div className={styles.footerBottom}>
                <FooterLinks/>
                <QuickLinks/>
                <div className={styles.footerRight}>
                    <FollowUs/>
                    <PaymentMethods/>
                </div>
            </div>
            <p className="t14 t-white t-center">Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    </>
}