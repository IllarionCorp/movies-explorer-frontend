import './Checkbox.css';

export default function Checkbox() {
    return (
        <div className='checkbox'>
            <input type='checkbox' className='checkbox__input' />
            <label className='checkbox__text'>Короткометражки</label>
        </div>
    );
}