import './styles/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <section className='header'>
                <h1 className='im'>I'M</h1>
                <h2 className='name'>Andres Motta</h2>
            </section>
            <section className='description'>
                <p>
                    + 6 years of experience. <span> Senior Software Engineer</span> specializing in <span>DevOps, Full Stack 
                    development for mobile, web, and desktop applications.</span> Friendly and passionate about 
                    continuous learning in software development. A good leader with a great ability 
                    to guide and support people in their growth. Creating the future, one line of code at a time.
                </p>
            </section>
            <section className='social_media'>
                <p><span><FontAwesomeIcon icon={faLinkedinIn} /></span> LinkedIn</p>
                <p><span><FontAwesomeIcon icon={faGithub} /></span> GitHub</p>
                <p><span className='solid'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> Resume</p>
            </section>
        </>
    )
}

export default Header;