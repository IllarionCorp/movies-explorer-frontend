import './Header.css';


export default function Header() {
    return (
        <header className='header'>
            <button className='header__logo'></button>
            <nav className='header__menu'>
                <p className='header__menu-link header__menu-link_films'>
                    Фильмы
                </p>
                <p className='header__menu-link header__menu-link_save-films'>
                    Сохраненные фильмы
                </p>
                <div className='header__menu-account'>
                    <p className='header__menu-link header__menu-link_acc'>Аккаунт</p>
                    <div className='header__profile' />
                </div>
            </nav>
            <nav className='header__menu header__menu_visible'>
                <p className='header__menu-link header__menu-link_reg'>Регистрация</p>
                <button className='header__menu-button'>
                    Войти
                </button>
            </nav>
        </header>
    );
}
