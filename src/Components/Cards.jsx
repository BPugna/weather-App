import { useSelector } from "react-redux";
import { Card } from "./Card";
import styled from "styled-components";

export function Cards(){

    let buscados = useSelector(state => state.buscados);

    return(
        <Cartas buscados={buscados}>
            {!buscados.length ? <h1>Realiza tu busqueda</h1> : (
                buscados.map(el => {
                    return(
                        <Card key={el.id}
                            id = {el.id}
                            name = {el.name}
                            temp = {el.main.temp}
                            desc = {el.weather[0].description}
                            img = {el.weather[0].icon}
                        />
                    )
                })
            )}
        </Cartas>
    )
}

const Cartas = styled.div`
    border-left: 1px solid white;
    box-shadow: -1px 10px 10px white;
    overflow-y: scroll;
    max-height: 93.5vh;
    width: 300px;
    backdrop-filter: blur(3px);
        &::-webkit-scrollbar {
        width: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: #aeb0af;
        }
        &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 9999px;
        }
    display: ${(props) => !props.buscados.length ? "flex" : "block"};
    align-items: ${(props) => !props.buscados.length ? "center" : "initial"};
    justify-content: ${(props) => !props.buscados.length ? "center" : "initial"};
    text-align: ${(props) => !props.buscados.length ? "center" : "initial"};
    h1 {
        width: ${(props) => !props.buscados.length ? "min-content" : "auto"};
        color: white;
        text-shadow: 0 0 10px red;
    }
`