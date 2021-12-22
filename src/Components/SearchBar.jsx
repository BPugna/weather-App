import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPlace } from "../redux/actions";
import styled from "styled-components";

export function SearchBar(){

    const [input, setInput] = useState("");
    let dispatch = useDispatch();

    function search(e){
        e.preventDefault();
        dispatch(searchPlace(input))
        setInput("")
    }

    function change(e){
        e.preventDefault();
        setInput(e.target.value);
    }

    return(
        <Formulario>
            <input value={input} onChange={e => change(e)} placeholder="Buscar"/>
            <button onClick={e => search(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#ffffff5e">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
        </Formulario>
    )
}

const Formulario = styled.form`
    height: 40px;
    width: max-content;
    display: flex;
    align-items: center;
    input {
        background-color: transparent;
        height: 30px;
        border: none;
        box-shadow: 0 0 4px white;
        border-radius: 4px;
        font-size: 1rem;
        font-weight:800;
        text-align: center;
        color: white;
        &::placeholder {color: #8f8e8c}
        &:hover {
            box-shadow: 0 0 8px white;
            &::placeholder {color: white}
        }
    }
    button {
        height: 30px;
        width: 30px;
        background-color: transparent;
        border: none;
        
    }
`