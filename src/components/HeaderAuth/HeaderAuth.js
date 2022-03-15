import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function HeaderAuth() {
    return (
        <Header>
            <Link to='/movies' className="header__menu-link header__menu-link_films">Фильмы</Link>
            <Link to='/saved-movies' className="header__menu-link header__menu-link_save-films">
              Сохраненные фильмы
            </Link>
            <Link to='/profile' className="header__menu-account">
                <p className="header__menu-link header__menu-link_acc">Аккаунт</p>
                <div className="header__profile" />
            </Link>  
          </Header>
    );
}