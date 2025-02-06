import styles from './navMenu.module.css';
import LinkItem from "../linkItem/linkItem";

export default function NavMenu(){
    return <>
        <div className={styles.menuContainer}>
            <LinkItem text={'SHOP'}/>
            <LinkItem text={'SKILLS'}/>
            <LinkItem text={'STORIES'}/>
            <LinkItem text={'ABOUT'}/>
            <LinkItem text={'CONTACT US'}/>
        </div>
    </>
}