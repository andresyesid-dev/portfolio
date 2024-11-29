import './styles/ExperienceCard.scss'

type Props = {
    key: number;
    title: string;
    description: string;
}

function Card({key, title, description}: Props) {
    return (
        <div className="card" key={key}> 
            <div className='sections'>
                <section className="left">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </section>
                <section className="right">

                </section>
            </div>
        </div>
    )
}

export default Card;