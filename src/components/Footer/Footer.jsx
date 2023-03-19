import Logo_footer from '../../assets/Logo_footer.svg'
import './Footer.css'


function Footer() {
    return (
        <div className= 'footer container'>
            <img src={Logo_footer} alt= 'logo kasa' className= 'kasa-logo' />
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer