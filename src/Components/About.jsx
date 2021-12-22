import { Link } from "react-router-dom"
import styled from "styled-components"

export function About(){
    return(
        <AboutStyle>
            <Interno>
                <Link to="/">
                    Volver
                </Link>
                <p>Mi nombre es Bautista Pugnaloni, soy Full-Stack Developer, con conocimientos en el stack de tecnologías PERN. La programación siempre me interesó. Hace cuatro meses fui admitido en el bootcamp de Henry, donde pude desarrollar más mis habilidades. <br/>Esta SPA (Single Page Application), fue una tarea propuesta dentro del bootcamp para aplicar ciertos conocimientos aprendidos, pero quise ponerme a prueba agregando un diseño y experiencia de usuario personal.</p>
                <Implementado>
                    <h3>Lo implementado en esta SPA fue:</h3>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.svgporn.com/logos/react.svg" alt="Logo React"/>
                    </a>
                    <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.svgporn.com/logos/redux.svg" alt="Logo Redux"/>
                    </a>
                    <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.svgporn.com/logos/react-router.svg" alt="Logo react-router"/>
                    </a>
                    <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
                        <img src="https://styled-components.com/logo.png" alt="Logo Styled-Components"/>
                    </a>
                </Implementado>
                <Implementado>
                    <h3>Si quieres saber mas de mi, estas son mis redes</h3>
                    <a href="https://www.linkedin.com/in/bpugnaloni-dev/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt="Logo LinkdedIn"/>
                    </a>
                    <a href="https://github.com/BPugna" target="_blank" rel="noreferrer">
                        <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="Logo GitHub"/>
                    </a>
                </Implementado>
            </Interno>
        </AboutStyle>
    )
}

const AboutStyle = styled.div`
    background-image: url("https://wallpaperaccess.com/full/278872.jpg");
    background-size:cover;
    background-attachment: fixed;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Interno = styled.div`
    text-align: center;
    width: 50vw;
    background-color: #ffffff5e;
    border: 1px solid white;
    color: black;
    border-radius: 4px;
    padding: 10px;
    font-weight: 600;
    a {
        text-decoration: none;
        font-size: 24px;
        font-weight: 800;
        color: black;
        text-shadow: 0 0 10px blueviolet;
        &:hover {
            text-shadow: 0 0 10px red;
            color: white;
        }
        img{
            height: 60px;
            width: 60px;
            &:hover{
                transform: scale(110%);
            }
        }
    }
    p {
        margin: 20px 0 0 0;
        font-size: 18px;
        a {
            color: blue;
        }
    }
`

const Implementado = styled.div`
    margin: 20px;
    padding: 5px;
    h3 {
        margin: 0 0 10px 0;
        text-decoration: underline;
    }
    a {
        margin: 5px 15px;
    }
`