import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    return(
        <div className='error-container container'>
            <p className= 'error--number'>404</p>
            <p className= 'error--text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className= 'error--link'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage