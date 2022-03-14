import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies(props) {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <MoviesCardList cards={props.cards} saveClass={' film-card__save-btn_delete'} />
        </section>
    );
}