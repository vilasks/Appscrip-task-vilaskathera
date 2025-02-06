import FooterAccordian from '../footerAccordian/footerAccordian';
import Icon from '../icon/icon';
import styles from './quickLinks.module.css';
export default function QuickLinks(){
    return <>
        <div className={styles.linksContainer}>
            <p className="t24 bold700 t-white">QUICK LINKS</p>
            <a className="t18 t-white decoration-none" href="#">Orders & Shipping</a>
            <a className="decoration-none t18 t-white" href="#">Join/Login as a Seller</a>
            <a className="decoration-none t18 t-white" href="#">Payment & Pricing</a>
            <a className="decoration-none t18 t-white" href="#">Return & Refunds</a>
            <a className="decoration-none t18 t-white" href="#">FAQs</a>
            <a className="t18 t-white decoration-none" href="#">Privacy Policy</a>
            <a className="t18 t-white decoration-none" href="#">Terms & Conditions</a>
        </div>
        <div className={styles.linksContainerMobile}>
            <FooterAccordian 
                title="QUICK LINKS"
                collpasedIcon={<Icon data='/arrowUpW.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_downW.svg' alt='arrowDown' width='16px' height='16px' />}
                >
                <a className="t18 t-white decoration-none" href="#">Orders & Shipping</a>
                <a className="decoration-none t18 t-white" href="#">Join/Login as a Seller</a>
                <a className="decoration-none t18 t-white" href="#">Payment & Pricing</a>
                <a className="decoration-none t18 t-white" href="#">Return & Refunds</a>
                <a className="decoration-none t18 t-white" href="#">FAQs</a>
                <a className="t18 t-white decoration-none" href="#">Privacy Policy</a>
                <a className="t18 t-white decoration-none" href="#">Terms & Conditions</a>
            </FooterAccordian>
        </div>
    </>
}