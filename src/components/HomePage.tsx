import styled from "styled-components";
import { Link, useLocation } from "react-router";
import { routes } from "../static/routes";
import BackgroundVideo from "./BackgroundVideo";
interface ContainerProps {
    isTaskPage: boolean;
}

const Container = styled.div<ContainerProps>`
    background-color: ${(props) =>
        props.isTaskPage ? "white" : "transparent"};
    padding: 20px;
    padding-top: 60px;
    color: black;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1; /* Makes sure buttons stay above video */
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



function HomePage() {
    const location = useLocation();
    const isTaskPage = [routes.htmlTaks, routes.cssTask, routes.reactTask].includes(location.pathname);

    return (
        <Container isTaskPage={isTaskPage}>
            {!isTaskPage && <BackgroundVideo />}
            <h1>Smartico - Frontend Tasks</h1>

            <ButtonContainer>
                <StyledButton to={routes.home}>Home</StyledButton>
                <StyledButton to={routes.htmlTaks}>HTML Task</StyledButton>
                <StyledButton to={routes.cssTask}>CSS Task</StyledButton>
                <StyledButton to={routes.reactTask}>React Task</StyledButton>
            </ButtonContainer>

        </Container>
    );
}

export default HomePage;
