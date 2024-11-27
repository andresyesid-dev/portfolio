import './styles/Header.scss'

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
        </>
    )
}

export default Header;