import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.css'


function Header() {
    return (
        <div className= 'kasa-header container'>
            <img src={logo} alt= 'logo kasa' className= 'header-logo' />
            <div className= 'nav'>
                <NavLink className='nav-link' to='/'>Accueil</NavLink>
                <NavLink className='nav-link' to='/Propos'>A Propos</NavLink>
            </div>
        </div>
    )
}

export default Header