import { HtmlTask } from './HtmlTask';
import { CssTask } from './CssTask';
import { ReactTask } from './ReactTask';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router';
import { routes } from './static/routes';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  color: black;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    color: #ffffff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;


function App() {
  return (
    <Container>
      <h1>Smartico - Frontend Tasks</h1>

      <ButtonContainer>
        <StyledButton to={routes.home}>Home</StyledButton>
        <StyledButton to={routes.htmlTaks}>HTML Task</StyledButton>
        <StyledButton to={routes.cssTask}>CSS Task</StyledButton>
        <StyledButton to={routes.reactTask}>React Task</StyledButton>
      </ButtonContainer>

      <Routes>
        <Route path={routes.htmlTaks} element={<HtmlTask />} />
        <Route path={routes.cssTask} element={<CssTask />} />
        <Route path={routes.reactTask} element={<ReactTask />} />
      </Routes>
    </Container>
  );
}

export default App;
