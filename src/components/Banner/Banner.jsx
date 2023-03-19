import banner from '../../assets/banner.svg'
import '../Banner/Banner.css'

function Banner() {
    return (
        <div className= 'banner-container container'>
            <img className='banner--img' src={banner} alt="banner img" />
            <div className='text-layer'>
            </div>
            <p className= 'banner--text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner