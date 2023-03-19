import aboutbanner from '../../assets/aboutbanner.svg';
import '../AboutBanner/AboutBanner.css';

function AboutBanner() {
    return(
        <div className='aboutbanner-container container'>
            <div className='aboutbanner-layer'></div>
            <img src={aboutbanner} alt="payage" className='aboutbanner--img' />
        </div>
    )
};

export default AboutBanner