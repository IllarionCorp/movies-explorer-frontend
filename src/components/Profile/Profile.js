import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, Илларион!</h1>
            <p className='profile__info'>Имя Виталий</p>
            <p className='profile__info'>E-mail <p>aaa@aa.aa</p></p>
            <Link to='/' className='profile__link'>Редактировать</Link>
            <Link to='/' className='profile__link profile__link_red'>Выйти из аккаунта</Link>
        </main>
    );
}