import styles from './footer.module.css'
import ContactUs from "../../utils/contactUs/contactUs";
import NewsLetter from "../../utils/newsLetter/newsLetter";
import FooterLinks from '../../utils/footerLinks/footerLinks';
import QuickLinks from '../../utils/quickLinks/quickLinks';
import FollowUs from '../../utils/followUs/followUs';
import PaymentMethods from '../../utils/paymentMethods/paymentMethods';

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