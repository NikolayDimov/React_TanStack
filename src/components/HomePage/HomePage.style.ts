import styled from "styled-components";
import { Link } from "react-router";
import { ContainerProps } from "./HomePage.static";

export const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.$isTaskPage ? "#EEEEEE" : "transparent"};
    padding: 1.25rem;
    padding-top: 3.75rem;
    color: black;
    text-align: center;
`;

export const Title = styled.h2`
    margin: 2.5rem 0 4.25rem 0;
    text-align: center;
    font-size: 2rem; 
    color: #333;
    font-weight: 600;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 1; 
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
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
    text-align: center;
    width: 14rem; 
    min-width: 8rem; 

    &:hover {
        background-color: #0056b3;
        color: #ffffff;
        box-shadow: 0.25rem 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
        transform: translateY(-0.125rem);
    }

    &:last-child {
        text-align: center;
        width: calc(28rem + 1.25rem); /* Matches width of the two buttons above */
    
        @media (max-width: 800px) {
            width: 14rem
        }
    }
`;
