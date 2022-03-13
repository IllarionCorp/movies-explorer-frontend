
import './Profile.css';

export default function Profile() {
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, Илларион!</h1>
            <form className='profile__form'>
                <div className='profile__info'>
                    <label className='profile__label'>Имя</label>
                    <input type='text' className='profile__input' value='gggg' />
                </div>
                <div className='profile__info'>
                    <label className='profile__label'>E-mail</label>
                    <input type='email' className='profile__input' value='ааа@ff,ff' />
                </div>
                <button type='submit' className='profile__link'>Редактировать</button>
                <button type='reset' className='profile__link profile__link_red'>Выйти из аккаунта</button>
            </form>
        </main>
    );
}