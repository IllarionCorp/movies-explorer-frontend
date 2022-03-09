import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__description'>
                <h3 className='description__title'>Дипломный проект включал 5 этапов</h3>
                <h3 className='description__title'>На выполнение диплома ушло 5 недель</h3>
                <p className='description__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='description__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='timeline'>
                <p className='timeline__text'>1 неделя</p>
                <p className='timeline__text'>4 недели</p>
                <p className='timeline__description'>Back-end</p>
                <p className='timeline__description'>Front-end</p>
            </div>
        </section>
    );
}