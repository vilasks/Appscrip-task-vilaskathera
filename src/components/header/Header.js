import styles from './header.module.css';
import UserActionsHeader from "../../utils/userActionsHeader/userActionsHeader";
import {Inter} from 'next/font/google'
import NavMenu from '../../utils/navMenu/navMenu';


const inter = Inter({subsets:['latin']})

export default function Header(){
    return <>
        <div className={styles.headerContainer}>
            <div className={styles.heroHeader}>
                <div>
                    <img className={`${styles.menuIcon} ${styles.icon}`} src="/hamburger.svg" alt="menu" />
                    <img className={`${styles.icon}`} src="/logo.svg" alt="logo" />
                </div>
                <div>
                    <p className={`${styles.logo} bold700 t-primary ${inter.className}`}>LOGO</p>
                </div>
                <UserActionsHeader/>
            </div>
            <div className={styles.navigation}>
                <NavMenu/>
            </div>
        </div>
    </>
}