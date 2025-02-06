import CustomSelect from '../customSelect/CustomSelect';
import Icon from '../icon/icon';
import styles from './userActionsHeader.module.css';

export default function UserActionsHeader(){
    const languageOptions = ['ENG','HIN',"TEL","FR","KAN"]
    return <>
        <div className={styles.userActionsContainer}>
            <Icon data={'/search.svg'} alt={'search'}/>
            <Icon data={'/heart.svg'} alt={'wishlist'}/>
            <Icon data={'/cart.svg'} alt={'cart'}/>
            <div className={styles.userActionsDynamic}>
                <Icon data={'/user.svg'} alt={'user'}/> 
                <CustomSelect options={languageOptions}/>
            </div>
        </div>
    </>
}