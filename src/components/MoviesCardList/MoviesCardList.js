import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList() {
    return (
        <section className='film-list'>
            <MoviesCard name='В погоне за Бенкси' time='24 минуты' img='https://avatars.mds.yandex.net/i?id=e70acb56c2899c282b9485ba813e046e-5876454-images-thumbs&n=13' /> 
        </section>
    );
}