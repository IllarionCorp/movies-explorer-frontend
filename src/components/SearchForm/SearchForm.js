import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

export default function SearchForm() {
    return (
            <section className='find-movies'>
                <form className='find-movies__form'>
                    <input type='text' className='find-movies__input' placeholder='Фильм' />
                    <button type='submit' className='find-movies__btn' />
                </form>
                <Checkbox />
            </section>
    );
}