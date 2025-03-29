import styled from "styled-components";
import { Link } from "react-router";

interface ContainerProps {
    isTaskPage: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${(props) =>
        props.isTaskPage ? "white" : "transparent"};
    padding: 20px;
    padding-top: 60px;
    color: black;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1; /* Makes sure buttons stay above video */
`;

export const StyledButton = styled(Link)`
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