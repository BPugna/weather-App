import { SearchBar } from './SearchBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export function NavBar(){
    return(
        <NavStyle>
            <Link to="/about">Sobre mi</Link>
            <SearchBar />
        </NavStyle>
    )
}

const NavStyle = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 0 1px 5px white;
    backdrop-filter: blur(3px);
    align-items: center;
    h3 {
        color: white;
        text-decoration: underline;
    }
    a {
        text-decoration: none;
        font-size: 20px;
        color: white;
        font-weight: 800;
        text-shadow: 0 0 10px black;
        &:hover {
            color: black;
            text-shadow: 0 0 10px white;
        }
    }
`
