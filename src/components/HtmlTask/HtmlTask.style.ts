import styled from "styled-components";
import { BackButton } from "../../utils/BackButton";

export const ContainerHtml = styled.div`
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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
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

export const Content = styled.div`
    margin-bottom: 1.25rem;
`;

export const Table = styled.table`
    font-family: "Times New Roman", serif;
    border: 0.125rem solid black;
    border-collapse: collapse;
    width: 20%;
    margin-bottom: 2rem;
`;

export const Th = styled.th`
    border: 0.125rem solid black;
    text-align: center;
`;

export const ThHours = styled.th`
    border: 0.125rem solid black;
    text-align: center;
    font-weight: normal;
`;

export const Td = styled.td`
    border: 0.125rem solid black;
    padding: 0.6px;
    padding-right: 1.6px;

`;

export const Tr = styled.tr`
    border: 0.125rem solid black;
    text-align: left;
`;

export const TrMain = styled.tr`
    border: 0.125rem solid black;
    text-align: center;
`;

export const LunchRow = styled.tr`
    font-weight: bold;
    text-align: center;
`;
