import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__descrition'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__texts'>
                <p className='footer__year'>&copy; 2022</p>
                <nav>
                    <Link className='footer__link' to={'/'}>Яндекс.Практикум</Link>
                    <Link className='footer__link' to={'/'}>Github</Link>
                    <Link className='footer__link' to={'/'}>VK</Link>
                </nav>
            </div>
        </footer>
    );
}