import { Link } from 'react-router-dom'
import './style.css'

function About() {
    return (
        <>
            <h2>minha outra pagina</h2>
            <Link to="/home">
            <button>voltar para Home</button>
            </Link>
            </>
    )   
}

export default About