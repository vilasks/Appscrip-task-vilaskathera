import styles from './footerLinks.module.css';
import FooterAccordian from '../footerAccordian/footerAccordian';
import Icon from '../icon/icon';

export default function FooterLinks(){
    return <>
        <div className={styles.linksContainer}>
            <p className="t24 bold700 t-white">mettā muse</p>
            <a className="t18 t-white decoration-none" href="#">About Us</a>
            <a className="decoration-none t18 t-white" href="#">Stories</a>
            <a className="decoration-none t18 t-white" href="#">Artisans</a>
            <a className="decoration-none t18 t-white" href="#">Boutiques</a>
            <a className="decoration-none t18 t-white" href="#">Contact Us</a>
            <a className="t18 t-white decoration-none" href="#">EU Compliance Docs</a>
        </div>
        <div className={styles.linksContainerMobile}>
            <FooterAccordian collpasedIcon={<Icon data='/arrowUpW.svg' alt='arrowUp' width='16px' height='16px' />}
                             expandIcon={<Icon data='/arrow_downW.svg' alt='arrowDown' width='16px' height='16px' />} 
                             title='mettā muse' >
                <a className="t18 t-white decoration-none" href="#">About Us</a>
                <a className="decoration-none t18 t-white" href="#">Stories</a>
                <a className="decoration-none t18 t-white" href="#">Artisans</a>
                <a className="decoration-none t18 t-white" href="#">Boutiques</a>
                <a className="decoration-none t18 t-white" href="#">Contact Us</a>
                <a className="t18 t-white decoration-none" href="#">EU Compliance Docs</a>
            </FooterAccordian>
        </div>
    </>
}