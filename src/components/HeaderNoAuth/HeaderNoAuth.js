import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function HeaderNoAuth(props) {
    return (
        <Header modefi={props.modefi}>
            <Link to={'/signup'} className="header__menu-link header__menu-link_reg">
              Регистрация
            </Link>
            <Link to={'/signin'}>
                <button className="header__menu-button">Войти</button>
            </Link>
        </Header>
    );
}