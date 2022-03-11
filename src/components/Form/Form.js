import { Link } from 'react-router-dom';
import './Form.css';

export default function Form(props) {
    return (
        <form id={props.typeForm} className='form'>
                {props.children}
            <div className='form__links'>
            <button type="submit" className='form__submit-button'>{props.buttonText}</button>
            <p className='form__question'>{props.question +" "}<Link to={props.link} className='reg__link'>{props.linkText}</Link></p>
            </div>            
        </form>
    );
}