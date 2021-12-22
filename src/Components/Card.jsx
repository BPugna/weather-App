import { useDispatch } from "react-redux";
import { changeActual, deleteCard } from "../redux/actions";
import styled from "styled-components";

export function Card({name, img, id,temp}){
    let dispatch = useDispatch();

    function detalles(e){
        e.preventDefault();
        dispatch(changeActual(id))
    }

    function borrar(e){
        e.preventDefault();
        dispatch(deleteCard(id))
    }

    return(
        <Carta>
            <div onClick={e => detalles(e)}>
                <h1>{name}</h1>
                <div>
                    <p>Temperatura: <span>{Math.round(temp-273.15)} °C</span></p>
                </div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`Logo de ${name}`}/>
            </div>
            <button onClick={e => borrar(e)}>Descartar</button>
        </Carta>
    )
}
// border: 1px solid white;

const Carta = styled.div`
    color: white;
    box-shadow: 0 0 10px #eb9d86;
    margin: 15px;
    text-align: center;
    button{
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 800;
        color: #e35654;
        &:hover {
            text-shadow: 0 0 10px red;
            color: white;
        }
    }
    &:hover {
        background-color: #0000008e;
        transform: scale(105%);
    }

`