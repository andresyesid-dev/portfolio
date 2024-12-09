import Experience from '../generals_components/Experience'
import Header from '../generals_components/Header'
import HeaderDecoration from '../generals_components/HeaderDecoration'
import Skills from '../generals_components/Skills'
import './styles/Home.scss'

function Home() {
    return (
        <>
            <HeaderDecoration />
            <Header />
            <Experience />
            <Skills />
        </>
    )
}
export default Home