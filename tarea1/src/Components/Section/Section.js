import Aside from '../Aside'
import {Container} from 'react-bootstrap'
import './Section.css'

const Section = () => {
    return ( 
        <Container id="container">
            <h1>Pablo Lopez - Terapia analítica</h1>
            <h4><i>"Las emociones inexpresadas nunca mueren. Son enterradas vivas y salen más tarde de peores formas."</i> - Sigmund Freud -</h4>
            <section className="d-flex justify-content-between">
                <div class="parrafos">
                    <p className="sobre-mi">Concibo la terapia como un camino de <strong> autoconocimiento y registro de sí </strong>. La idea es que el paciente conforme un espacio donde pueda sentirse libre y cómodo de hablar de lo que sienta con vistas a abordar esos temas desde una perspectiva donde el problema surja de forma natural. Luego, hacerlo consciente y visible a partir del habla y comenzar a trabajarlo. Ésto último supone una decisión. </p>
                    
                    <p className="sobre-mi">Creo firmemente que, al decidir trabajar sobre nuestros problemas, es la manera correcta de comenzar a resolverlos.</p>

                    <div className="contacto">
                        <h1 className="display-4" id="contacto">Consulta</h1>
                        <p className="lead">Contactame por redes sociales</p>
                        <div className="container redes d-flex justify-content-around">
                            <a className="iconos" href="https://www.facebook.com/psicopablopez" rel="noreferrer" target="_blank"> <i className="fab fa-facebook"></i></a>
                            <a className="iconos" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5491136575775" target="_blank"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <Aside />
            </section>
        </Container>
    ); 
}
 
export default Section;