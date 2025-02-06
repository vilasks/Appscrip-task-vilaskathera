import styles from './followUs.module.css';
import Icon from "../icon/icon";
import FooterAccordian from '../footerAccordian/footerAccordian';

export default function FollowUs(){
    return <>
        <div className={styles.followUsContainer}>
            <p className="t20 t-white">FOLLOW US</p>
            <div className={styles.iconsContainer}>
                <Icon data='/instagram.svg' alt='instagram' width='32px' height='32px'/>
                <Icon data='/linkedin.svg' alt='linkedin' width='32px' height='32px'/>
            </div>
        </div>
        <div className={styles.followUsContainerMobile}>
            <FooterAccordian 
                title='FOLLOW US'
                collpasedIcon={<Icon data='/arrowUpW.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_downW.svg' alt='arrowDown' width='16px' height='16px' />} 
                >
                <div className={styles.iconsContainer}>
                    <Icon data='/instagram.svg' alt='instagram' width='32px' height='32px'/>
                    <Icon data='/linkedin.svg' alt='linkedin' width='32px' height='32px'/>
                </div>
            </FooterAccordian>
        </div>
    </>
}