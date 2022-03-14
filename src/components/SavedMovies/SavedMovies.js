import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies(props) {
    return (
        <section className='saved-movies'>
            <MoviesCardList cards={props.cards} />
        </section>
    );
}