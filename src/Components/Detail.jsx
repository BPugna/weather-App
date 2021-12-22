import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";

export function Detail(){

    let actual = useSelector(state => state.actual);
    var [estado, setEstado] = useState("");
    
    if(actual){
        var huso = actual.timezone;

        var actTime = new Date(actual.dt * 1000)
        var actTimeH = (actTime.getHours()+ 3+ (huso/3600)) + ""
        if(actTimeH.length === 1) actTimeH = 0 + actTimeH
        let aux = parseInt(actTimeH);
        if(aux >= 24) actTimeH = aux - 24;
        var actTimeM = actTime.getMinutes() + "";
        if(actTimeM.length === 1) actTimeM = 0 + actTimeM
        var tiempo = parseInt(actTimeH + actTimeM)

        var amanecer = new Date(actual.sys.sunrise *1000)
        var horaAmanecer = (amanecer.getHours()+ 3+ (huso/3600)) + ""
        if(horaAmanecer.length === 1) horaAmanecer = 0 + horaAmanecer
        let auxx = parseInt(horaAmanecer);
        if(auxx >= 24) horaAmanecer = auxx - 24;
        var minutosAmanecer = amanecer.getMinutes() + "";
        if(minutosAmanecer.length === 1) minutosAmanecer = 0 + minutosAmanecer
        var tiempoAman = parseInt(horaAmanecer + minutosAmanecer)

        var anochecer = new Date(actual.sys.sunset *1000)
        var horaAnochecer = (anochecer.getHours() + 3+ (huso/3600)) + ""
        let auxxx = parseInt(horaAnochecer);
        if(auxxx >= 24) horaAnochecer = auxxx - 24;
        if(horaAnochecer.length === 1) horaAnochecer = 0 + horaAnochecer
        var minutosAnochecer = anochecer.getMinutes() + "";
        if(minutosAnochecer.length === 1) minutosAnochecer = 0 + minutosAnochecer
        var tiempoNoche = parseInt(horaAnochecer + minutosAnochecer)

    }

    useEffect(()=>{
        tiempo > tiempoNoche ? setEstado(false) : setEstado(true)
        tiempo < tiempoNoche && tiempo > tiempoAman ? setEstado(true) : setEstado(false)
    },[actual])

    return(
        <Detalles dia={estado}>
            {
                !actual ? <Nada>Aplicación de Clima</Nada> : (
                    <Flex dia={estado}>
                    <h1>{(actual.name).toUpperCase()}</h1>
                    <h2>{actual.weather[0].description}</h2>
                    <h5>{`${actTimeH}:${actTimeM}`}</h5>
                    <Info dia={estado}>
                        <Temp dia={estado}>
                            <h3>Temperatura: {Math.round(actual.main.temp-273.15)} °C</h3>
                            <h4>Min:{Math.round(actual.main.temp_min-273.15)} °C</h4>
                            <h4>Max:{Math.round(actual.main.temp_max-273.15)} °C</h4>
                        </Temp>
                        <Add dia={estado}>
                            <h3>Sensacion Térmica: {Math.round(actual.main.feels_like-273.15)} °C</h3>
                            <h3>Humedad: {actual.main.humidity}%</h3>
                            <h3>Presión: {actual.main.pressure} mb</h3>
                        </Add>
                    </Info>
                    <Info >
                        <OtraData dia={estado}>
                            <img src={`http://openweathermap.org/img/wn/${actual.weather[0].icon}@2x.png`} alt={`Logo de ${actual.name}`}/>
                            <p>Amanece</p>
                            <h5>{`${horaAmanecer}:${minutosAmanecer}`}</h5>
                            <p>Anochece</p>
                            <h5>{`${horaAnochecer}:${minutosAnochecer}`}</h5>
                            
                        </OtraData>
                        <iframe className="map"
                        src={`https://maps.google.com/?ll=${actual.coord.lat},${actual.coord.lon}&z=12&t=k&output=embed`}
                        height= "225"
                        width = "225"
                    />
                    </Info>
                </Flex>
                )
            }
        </Detalles>
    )
}

const Detalles = styled.div`
    margin: auto;
    width: 50vw;
    background-color: ${(props) => props.dia ? "#ffffff5e" : "#0000008e"};
    box-shadow: ${(props) => props.dia ? "0 0 20px orange" : "0 0 20px blueviolet"};
    text-align: center;
    border-radius: 6px;
    padding: 15px;
    h1 {
        color: ${(props) => props.dia ? "black" : "white"};
        font-size: 38px;
        padding: 0 0 10px 0;
        text-decoration: underline;
    }
    h2 {
        color: ${(props) => props.dia ? "black" : "white"};
        text-shadow: ${(props) => props.dia ? "0 0 2px black" : "0 0 2px white"};;
    }
    h5 {
        font-size: 16px;
        color: ${(props) => props.dia ? "black" : "white"};
        text-shadow: ${(props) => props.dia ? "0 0 2px black" : "0 0 2px white"};  
    }
`

const Nada = styled.div`
    font-size: 36px;
    color: white;
    font-weight: 800;
    text-shadow: 0 0 5px blueviolet;
`
const Flex = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    img {
        width: 100px;
        height: 100px;
    }
`

const Temp = styled.div`
    margin: 10px;
    color: ${(props) => props.dia ? "black" : "white"};
    text-shadow: ${(props) => props.dia ? "0 0 2px black" : "0 0 2px white"};
    h4 {
        margin: 4px;
    }
`

const Add = styled.div`
    margin: 10px;
    color: ${(props) => props.dia ? "black" : "white"};
    text-shadow: ${(props) => props.dia ? "0 0 2px black" : "0 0 2px white"};
    h4 {
            margin: 4px;
        }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: space-evenly;
    align-items: center;
`

const OtraData = styled.div`
    p{
        font-size: 20px;
        color: ${(props) => props.dia ? "black" : "white"};
        text-shadow: ${(props) => props.dia ? "0 0 2px black" : "0 0 2px white"};
    }
`