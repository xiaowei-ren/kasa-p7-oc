import '../DropdownOpen/DropdownOpen.css';
import vectorOpen from '../../assets/vectorOpen.svg';
import { useState, useEffect } from 'react';


function DropdownOpen(props) {
    const [open, setOpen] = useState(true)
    const toggleOpen = () => setOpen(!open);

    let dropdownClass = 'Dropdownopen--base';
    let arrowClass = 'Dropdownopen--top-img';

    return(
        <div className='Dropdownopen-container'>
            <div className='Dropdownopen--top'>
                <p className='Dropdownopen--top-title'>{props.title}</p>
                <img src={vectorOpen} alt="arrow-open" onClick={() => {toggleOpen()}} className={'Dropdownopen--top-img ' + (open ? '' : 'hidden')}/>
            </div>
            <div className={'Dropdownopen--base ' + (open ? '' : 'hidden')}>
                <p className='Dropdownopen--base-text'>{props.description}</p>
            </div>
        </div>
    )
}

export default DropdownOpen