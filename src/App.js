import { Body } from './Components/Body'
import styled from 'styled-components';

function App() {

  return (
    <General> 
      <Body />
    </General>
  );
}

export default App;

const General = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg");
  background-size:cover;
  background-attachment: fixed;
  min-height: 100vh;
  min-width: 100vw;
`