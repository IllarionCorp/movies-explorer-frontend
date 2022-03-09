import './Techs.css';

export default function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs-description'>
                <h2 className='techs-description__title'>
                    7 технологий
                </h2>
                <p className='techs-description__text'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>    
            </div>
            <div className='techs-cards'>
                <p className='techs-cards__card'>HTML</p>
                <p className='techs-cards__card'>CSS</p>
                <p className='techs-cards__card'>JS</p>
                <p className='techs-cards__card'>React</p>
                <p className='techs-cards__card'>Git</p>
                <p className='techs-cards__card'>Express.js</p>
                <p className='techs-cards__card'>mongoDB</p>
            </div>
        </section>
    );
}