import './AboutMe.css';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';


function ageCalc() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dob = new Date(2000, 8, 12);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age;
    age = today.getFullYear() - dob.getFullYear();

    if(today < dobnow) {
        age = age -1;
    }
    return age;
}

export default function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me-description'>
                <h3 className='about-me-description__title'>Илларион</h3>
                <p className='about-me-description__profession'>Фронтенд-разработчик, {ageCalc()}</p>
                <p className='about-me-description__text'>Я родился в подмосковье, с детства живу в Москве. Закончил колледж. Увлекаюсь автомобилями и их тюнингом. С 2020 года работал в АО "Ангстрем" по август 2021. На данный момент работаю начальником отдела IT в ФГУП "МПрОП".</p>
            </div>
            <img className='about-me__photo' src={avatar} alt='Изображение создателя сайта' />
            <nav className='about-me__links'>
                <Link className='about-me__link' to={'/'}>Github</Link>
                <Link className='about-me__link' to={'/'}>VK</Link>
            </nav>
            <div className='portfolio'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <Link className='portfolio__link' to={'/'}>
                    <p>Статичный сайт</p>
                    <p>↗</p>
                </Link>
                <Link className='portfolio__link' to={'/'}>
                    <p>Адаптивный сайт</p>
                    <p>↗</p> 
                </Link>
                <Link className='portfolio__link' to={'/'}>
                    <p>Одностраничное приложение</p>
                    <p>↗</p>
                </Link>    
            </div>
        </section>
    );
}