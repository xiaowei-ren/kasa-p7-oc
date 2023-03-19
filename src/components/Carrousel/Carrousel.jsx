import '../Carrousel/Carrousel.css';
import arrowforward from '../../assets/arrowforward.svg';
import arrowback from '../../assets/arrowback.svg';
import { useState } from 'react';


function Carrousel(props) {
    const [imgIndex, setImgIndex] = useState(0)

    const slideImage = (direction) => {
        let lastImageIndex = props.images.length - 1
        if (direction === 'right') {
            let nextIndex = (imgIndex == lastImageIndex) ? 0 : imgIndex + 1
            setImgIndex(nextIndex)
        } else {
            let nextIndex = (imgIndex == 0) ? lastImageIndex : imgIndex - 1
            setImgIndex(nextIndex)
        }
    }

    return(
        <div className='carrousel-container container'>
            <img src={props.images ? props.images[imgIndex] : ''} alt="logement" className='carrousel--img'/>
            <div className='carrousel--icon'>
                <img src={arrowback} alt="arrorow icon" className='carrousel--icon-left' onClick={() => {slideImage('left')}}/>
                <img src={arrowforward} alt="arrorow icon" className='carrousel--icon-right' onClick={() => {slideImage('right')}}/>
            </div>
            <p className='carrousel--text'>{imgIndex + 1}/{props.images.length}</p>
        </div>
    )
};

export default Carrousel 