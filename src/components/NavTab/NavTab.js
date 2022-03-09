import { Link } from 'react-router-dom';
import './NavTab.css';

export default function NavTab() {
    return (
        <section className='nav-tab'>
            <nav className='navigate'>
                <Link className='navigate__link' to={`/`}>О проекте</Link>
                <Link className='navigate__link' to={`/`}>Технологии</Link>
                <Link className='navigate__link' to={`/`}>Студент</Link>
            </nav>    
        </section>
    );
}