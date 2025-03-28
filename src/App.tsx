
import { HtmlTask } from './HtmlTask';
import { CssTask } from './CssTask';
import { ReactTask } from './ReactTask';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 20px;
  color: black;
`;

function App() {
  return (

    <Container>
      <h1>Smartico - Frontend Tasks</h1>
      <hr />
      <HtmlTask />
      <hr />
      <CssTask />
      <hr />
      <ReactTask />
    </Container>
  );
}

export default App;
