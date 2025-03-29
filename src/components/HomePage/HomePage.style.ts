import styled from "styled-components";
import { Link } from "react-router";
import { ContainerProps } from "./HomePage.static";

export const Container = styled.div<ContainerProps>`
    background-color: ${(props) =>
        props.isTaskPage ? "white" : "transparent"};
    padding: 1.25rem;
    padding-top: 3.75rem;
    color: black;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 1; /* Makes sure buttons stay above video */
`;

export const StyledButton = styled(Link)`
    padding: 0.625rem 1.25rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0.125rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #0056b3;
        color: #ffffff;
        box-shadow: 0.25rem 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
        transform: translateY(-0.125rem);
    }
`;
