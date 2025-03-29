import styled from "styled-components";
import "./style.css";
import { BackButton } from "../../utils/BackButton";

export const ContainerCss = styled.div`
    background-color: #EEEEEE;
    color: black;
    padding: 1.25rem;
    width: 87.5rem;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > ${BackButton} {
        align-self: flex-start;
    }

    @media (max-width: 800px) {
        width: 100%; 
        max-width: 600px; 
        padding: 1.25rem; 
        margin: 0 auto;  
        flex-direction: column-reverse;
    }
`;

export const CenteredContent = styled.div`
    margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
    margin: 2.5rem 0 2.25rem 0;
    text-align: center;
    font-size: 3rem; 
    font-weight: 700;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #007bff, #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 800px) {
        font-size: 2.5rem;
    }
`;


export const TaskDescription = styled.p`
    font-size: 1.125rem;
    margin-bottom: 2rem;
`;

export const TaskImage = styled.img`
    width: 300px;
    margin-bottom: 2rem;
`;

export const Container = styled.div`
    width: 18.75rem;
    height: 14.125rem;
    background-color: #62374e;
    position: relative;
    margin: 0 auto;
`;

export const Square = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    background-color: #fdc57b;
    position: absolute;

    &.top-left {
        top: 2.25rem;
        left: 2.25rem;
    }

    &.top-right {
        top: 2.25rem;
        right: 2.25rem;
    }

    &.bottom-left {
        bottom: 2.25rem;
        left: 2.25rem;
    }

    &.bottom-right {
        bottom: 2.25rem;
        right: 2.25rem;
    }
`;
