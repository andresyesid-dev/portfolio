import './styles/Experience.scss'
import Card from './ExperienceCard';

function Experience() {
    const titles: string[] = [
        'IBM',
        'Joum ',
        'Soluciones Científicas'
    ]

    const descriptions: string[] = [
        'I led the migration of microservices for Bancolombia and Davivienda, conducting exhaustive testing and managing their deployment to production. I also provided leadership and mentorship to new team members.',
        'I developed a functional e-commerce platform from scratch, demonstrating effective time management and adherence to good software practices.',
        'I designed and developed the functionality of the Crystals program, engaged in continuous planning with the CEO, and provided support for crystallography in sugar mills.'
    ]


    return (
        <section className='experience'>
            <h1 className='title'>EXPERIENCE</h1>
            <div className='cards'>
                {descriptions.map((description, index) => (
                    <Card key={index} title={titles[index]} description={description} />
                ))}
            </div>
        </section>
    )
}


export default Experience;