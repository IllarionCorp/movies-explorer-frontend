import { Link } from 'react-router-dom';
import './NavTab.css';

export default function NavTab() {
    return (
        <section className='nav-tab'>
            <nav className='navigate'>
                <Link className='navigate__link' to='#project'> О проекте </Link>
                <a className='navigate__link' href='#techs'> Технологии </a>
                <Link className='navigate__link' to='#me'> Студент</Link>
            </nav>    
        </section>
    );
}