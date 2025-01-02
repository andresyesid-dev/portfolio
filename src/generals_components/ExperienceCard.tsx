import './styles/ExperienceCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = {
    index: number;
    title: string;
    date: string;
    description: string;
}

function Card({index, title, date, description}: Props) {
    const imgs: string[] = ['scientificas', 'joum','ibm' ]
    const img = imgs[index];
    return (
        <div className="experience_card"> 
            <div className='sections'>
                <section className="left">
                    <h3>{title}</h3>
                    <h4 className='date'>{date}</h4>
                    <p>{description}</p>
                    <div className='directions'>
                        <span><div className='back-icons'></div><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        <span><div className='back-icons'></div><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                    </div>
                </section>
                <section className="right">
                    <img src={`/assets/imgs/${img}.png`} />
                </section>
            </div>
        </div>
    )
}

export default Card;