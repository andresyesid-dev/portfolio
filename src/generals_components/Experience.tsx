import './styles/Experience.scss'
import Card from './ExperienceCard';

function Experience() {
    const titles: string[] = [
        'SOLUCIONES CIENTÍFICAS',
        'JOUM ',
        'IBM'
    ]
    
    const dates: string[] = [
        'Jul 2024 - Current ',
        'Agu 2023 - May 2024 ',
        'Dic 2021 - May 2023'
    ]
    
    const descriptions: string[] = [
        'I designed and developed the functionality of the Crystals program, engaged in continuous planning with the CEO, and provided support for crystallography in sugar mills.',
        'I developed a functional e-commerce platform from scratch, demonstrating effective time management and adherence to good software practices.',
        'I led the migration of microservices for Bancolombia and Davivienda, conducting exhaustive testing and managing their deployment to production. I also provided leadership and mentorship to new team members.'
    ]


    return (
        <section className='experience'>
            <h1 className='title'>EXPERIENCE</h1>
            <div className='cards'>
            {descriptions.map((description, index) => {
                return <Card key={index} index={index} title={titles[index]} date={dates[index]}  description={description} />;
            })}
            </div>
            <div className='decoration_left'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}


export default Experience;