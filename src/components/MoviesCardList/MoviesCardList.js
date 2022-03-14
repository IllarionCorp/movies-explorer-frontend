import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
    return (
        <section className={props.savedFilm ? 'film-list film-list_saved' : 'film-list'}>
            {props.cards.map((data) => (
                <MoviesCard name={data.name} time={data.time} img={data.img} />
            ))}
        </section>
    );
}