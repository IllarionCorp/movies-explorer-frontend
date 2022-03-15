import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
    console.log(props)
    return (
        <section className='film-list'>
            {props.cards.map((data) => {
                return(
                <div key={data._id}> 
                    <MoviesCard img={data.img} name={data.name} time={data.time} saveClass={props.saveClass} />
                </div>
                )
            }) }
               
        </section>
    );
}