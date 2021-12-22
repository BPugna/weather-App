import axios from 'axios';
const SEARCH_PLACE = "SEARCH_PLACE";
const CHANGE_ACTUAL = "CHANGE_ACTUAL";
const DELETE_CARD = "DELETE_CARD";
 
let apikey = "acabc8f5b5a0cfee695dca60a541dfeb"

export function searchPlace(index){
    return async function(dispatch){
        try {
            let aux = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${index}&appid=${apikey}`)
            return dispatch({
                type: SEARCH_PLACE,
                payload: aux.data
            })
        } catch (err) {
            alert(`No se pudo encontrar ${index}. Prueba otro lugar!`)
        }
    }
}

export function changeActual(id){
    return {
        type: CHANGE_ACTUAL,
        payload: id
    }
}

export function deleteCard(id){
    return{
        type: DELETE_CARD,
        payload: id
    }
}