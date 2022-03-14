import './MoviesCard.css';

export default function MoviesCard(props) {
    let id = props.key;
    console.log(id)
    return (
        <div className='film-card'>
            <h2 className='film-card__title'>
                {props.name}
            </h2>
            <p className='film-card__time'>
                {props.time}
            </p>
            <img src={props.img} className='film-card__preview' alt={'Превью с фильмом ' + props.name} />
            <input type='checkbox' className={"film-card__save-btn" + props.saveClass} />
        </div>
    );
}