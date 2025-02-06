import Icon from '../icon/icon';
import styles from './paymentMethods.module.css';
export default function PaymentMethods(){
    return <>
        <div>
            <p className="t20 t-white">mettā muse <span className='bold700'>ACCEPTS</span></p>
            <div className={styles.iconsContainer}>
                <Icon data={'/gpay.svg'} alt={'gpay'} width={'56px'} height={'35px'}/>
                <Icon data={'/mastercard.svg'} alt={'mastercard'} width={'56px'} height={'35px'}/>
                <Icon data={'/paypal.svg'} alt={'paypal'} width={'56px'} height={'35px'}/>
                <Icon data={'/amex.svg'} alt={'amex'} width={'56px'} height={'35px'}/>
                <Icon data={'/apple.svg'} alt={'apple'} width={'56px'} height={'35px'}/>
                <Icon data={'/dpay.svg'} alt={'dpay'} width={'56px'} height={'35px'}/>
            </div>
        </div>
    </>
}