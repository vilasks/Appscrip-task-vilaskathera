import styles from './filterOptions.module.css';
import Accordian from "../../utils/accordian/accordian";
import Icon from "../../utils/icon/icon";


export default function FilterOptions({}){

    const idealFilterOptions = [
        {title: 'Men', value: 'men'},
        {title: 'Women', value: 'women'},
        {title: 'Baby & Kids', value: 'baby_and_kids'}
    ]

    const occasionFilterOptions = [
        {title: 'Office', value: 'office'},
        {title: 'Party', value: 'party'},
        {title: 'Traditional', value: 'traditional'},
        {title: 'Causal', value: 'causal'}
    ]

    const workFilterOptions = [
        {title: 'Office', value: 'office'},
        {title: 'BoardRoom', value: 'boardroom'},
    ]

    const fabricFilterOptions = [
        {title: 'Lenin', value: 'lenin'},
        {title: 'Cotton', value: 'cotton'},
        {title: 'Silk', value: 'silk'},
    ]

    return <>
        <div className={styles.filtersConainer}>
            <div className={styles.filtersHeader}>
                <input style={{width:'18px', height:'18px'}} type='checkbox' id="customize" name="customize"/>
                <label className="t16 t-cursor" htmlFor="customize">CUSTOMIZE</label>
            </div>
            {/* Ideal For */}
            <Accordian 
                title={'IDEAL FOR'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={idealFilterOptions}
            />
            {/* Occasion */}
            <Accordian 
                title={'OCCASION'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={occasionFilterOptions}
            />
            {/* work */}
            <Accordian 
                title={'WORK'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={workFilterOptions}
            />
            {/* Fabric */}
            <Accordian 
                title={'FABRIC'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={fabricFilterOptions}
            />
            {/* SEGMENT */}
            <Accordian 
                title={'SEGMENT'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={idealFilterOptions}
            />
            {/* Suitable For */}
            <Accordian 
                title={'SUITABLE FOR'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={idealFilterOptions}
            />
            {/* Raw Material */}
            <Accordian 
                title={'RAW MATERIAL'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={idealFilterOptions}
            />
            {/* PATTERN */}
            <Accordian 
                title={'PATTERN'} 
                collpasedIcon={<Icon data='/arrowUp.svg' alt='arrowUp' width='16px' height='16px' />}
                expandIcon={<Icon data='/arrow_down.svg' alt='arrowDown' width='16px' height='16px' />}
                options={idealFilterOptions}
            />
        </div>
    </>
}
