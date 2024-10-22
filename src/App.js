import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);

`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
