import '../Dropdownlarge/Dropdownlarge.css';
import vectorOpen from '../../assets/vectorOpen.svg';
import { useState } from 'react';

function Dropdownlarge(props) {
    const [open, setOpen] = useState(false)

    return(
        <div className={`Dropdownlarge-container ${props.small ? ' small' : ''}`}>
            <div className='Dropdownlarge--top' onClick={() => setOpen(!open)}>
                <p className='Dropdownlarge--top-title'>{props.title}</p>
                <img src={vectorOpen} alt="arrow-open" className={'Dropdownlarge--top-img ' + (open ? '' : 'hidden')}/>
            </div>
            <div className={'Dropdownlarge--base ' + (open ? '' : 'hidden')}>
                <p className='Dropdownlarge--base-text'>{props.text}</p>
            </div>
        </div>
    )
}

export default Dropdownlarge