import { Link } from 'react-router-dom';
import './Form.css';

export default function Form(props) {
    return (
        <form id={props.typeForm} className='form'>
                {props.children}
            <button type="submit" className='form__submit-button'>{props.buttonText}</button>
            <p className='form__question'>Ещё не зарегистрированы? <Link to="/signup" className='reg__link'>Регистрация</Link></p>
        </form>
    );
}