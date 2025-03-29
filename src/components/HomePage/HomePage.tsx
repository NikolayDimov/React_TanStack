import { useLocation } from "react-router";
import { routes } from "../../static/routes";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import { ButtonContainer, Container, StyledButton } from "./HomePage.style";

const HomePage: React.FC = () => {
    const location = useLocation();
    const isTaskPage = [routes.htmlTaks, routes.cssTask, routes.reactTask].includes(location.pathname);

    return (
        <Container $isTaskPage={isTaskPage}>
            {!isTaskPage && <BackgroundVideo />}
            <h1>Smartico - Frontend Tasks</h1>
            <ButtonContainer>
                <StyledButton to={routes.home}>Home</StyledButton>
                <StyledButton to={routes.htmlTaks}>HTML Task</StyledButton>
                <StyledButton to={routes.cssTask}>CSS Task</StyledButton>
                <StyledButton to={routes.reactTask}>React Task</StyledButton>
                <StyledButton to={routes.advancedReactTask}>Advanced React Task</StyledButton>
            </ButtonContainer>

        </Container>
    );
}

export default HomePage;
