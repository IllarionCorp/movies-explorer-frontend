import "./Header.css";

export default function Header(props) {
  return (
    <header className={"header " + props.modefi}>
      {
          props.modefi !== "header_sign" ? (
            <>
            <button className="header__logo"></button>
            <nav
                className={"header__menu"}
             >
        {props.loggedIn ? (
          <>
            <p className="header__menu-link header__menu-link_films">Фильмы</p>
            <p className="header__menu-link header__menu-link_save-films">
              Сохраненные фильмы
            </p>
            <div className="header__menu-account">
              <p className="header__menu-link header__menu-link_acc">Аккаунт</p>
              <div className="header__profile" />
            </div>
          </>
        ) : (
          <>
            <p className="header__menu-link header__menu-link_reg">
              Регистрация
            </p>
            <button className="header__menu-button">Войти</button>
          </>
        )}
      </nav>
            </>
            
          ) : (
            <>  
                <div className="header__sign-block">
                    <button className="header__logo header__logo_sign"></button>
                    <h1 className="header__title">{props.titleText}</h1>
                </div>
            </>
          )
      }
      
    </header>
  );
}
