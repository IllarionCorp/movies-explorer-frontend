import { Link } from 'react-router-dom';
import './NotFoundPage.css';


export default function NotFoundPage() {
    return (
        <main className='not-found-page'>
            <h1 className='not-found-page__title'>404</h1>
            <p className='not-found-page__description'>Страница не найдена</p>
            <Link to="/" className="not-found-page__link">Назад</Link>
        </main>
    );
}