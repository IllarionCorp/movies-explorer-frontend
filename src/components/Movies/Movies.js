import More from '../More/More';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css';

export default function Movies(props) {
    return (
        <main className='movies'>
            <SearchForm />
            <MoviesCardList cards={props.cards} saveClass={' '} />
            <More />
        </main>
    );
}
