import '../Carrousel/Carrousel.css';
import arrowforward from '../../assets/arrowforward.svg';
import arrowback from '../../assets/arrowback.svg';
import { useState } from 'react';


function Carrousel(props) {
    //definier l'index du premier slide a 0
    const [imgIndex, setImgIndex] = useState(0)

    const slideImage = (direction) => {
        let lastImageIndex = props.images.length - 1
        // Repart au premier slide quand on arrive au dernier
        if (direction == 'right') {
            // Repart au premier slide quand on arrive au dernier 
            let nextIndex = (imgIndex == lastImageIndex) ? 0 : imgIndex + 1
            setImgIndex(nextIndex)
        } else {
           // repart au dernier slide quand on est au premier
            let nextIndex = (imgIndex == 0) ? lastImageIndex : imgIndex - 1
            setImgIndex(nextIndex)
        }
    }

    return(
        <div className='carrousel-container container'>
            <img src={props.images ? props.images[imgIndex] : ''} alt="logement" className='carrousel--img'/>
            <div className='carrousel--icon'>
                {/* Affichage des slides quand on click les flèches*/}
                <img src={arrowback} alt="arrorow icon" className='carrousel--icon-left' onClick={() => {slideImage('left')}}/>
                <img src={arrowforward} alt="arrorow icon" className='carrousel--icon-right' onClick={() => {slideImage('right')}}/>
            </div>
            <p className='carrousel--text'>{imgIndex + 1}/{props.images.length}</p>
        </div>
    )
};

export default Carrousel 