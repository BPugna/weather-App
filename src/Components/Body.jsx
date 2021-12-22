import { Cards } from './Cards';
import { Detail } from './Detail';
import { NavBar } from './NavBar';
import styled from 'styled-components';


export function Body(){
    return(
        <div>
            <NavBar />
            <BodyData>
                <Detail />
                <Cards />
            </BodyData>
        </div>
    )
}

const BodyData = styled.div`
    display: flex;
    min-height: 93.5vh;
    justify-content: space-between;
`