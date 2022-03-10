import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <header className={"header " + props.modefi}>
      {
          props.modefi !== "header_sign" ? (
            <>
            <Link to='/'><button type="button" className="header__logo" /></Link>
            <nav
                className={"header__menu"}
             >
            {props.loggedIn ? (
            <>
            <Link to='/movies' className="header__menu-link header__menu-link_films">Фильмы</Link>
            <Link to='/saved-movies' className="header__menu-link header__menu-link_save-films">
              Сохраненные фильмы
            </Link>
            <Link to='/profile' className="header__menu-account">
                <p className="header__menu-link header__menu-link_acc">Аккаунт</p>
                <div className="header__profile" />
            </Link>  
          </>
        ) : (
          <>
            <Link to={'/signup'} className="header__menu-link header__menu-link_reg">
              Регистрация
            </Link>
            <Link to={'/signin'}>
                <button className="header__menu-button">Войти</button>
            </Link>
          </>
        )}
      </nav>
            </>
            
          ) : (
                <>  
                    <div className="header__sign-block">
                        <Link to="/"><button type="button" className="header__logo header__logo_sign" /></Link>
                        <h1 className="header__title">{props.titleText}</h1>
                    </div>
                </>
          )
      }
      
    </header>
  );
}
