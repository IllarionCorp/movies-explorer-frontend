import { Link } from 'react-router-dom';
import './Form.css';

export default function Form(props) {
    return (
        <form id={props.typeForm} className='form'>
                <p className='form__input-name'>Имя</p>
                <input className='form__input' />
                <span className='form__error'>aaaaaaaa</span>
                <p className='form__input-name'>Имя</p>
                <input className='form__input' />
                <span className='form__error'>aaaaaaaa</span>
            <button type="submit" className='form__submit-button'>{props.buttonText}</button>
            <p className='form__question'>Ещё не зарегистрированы? <Link to={'/'} className='reg__link'>Регистрация</Link></p>
        </form>
    );
}