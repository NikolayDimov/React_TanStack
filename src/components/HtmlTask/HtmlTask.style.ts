import styled from "styled-components";
import { BackButton } from "../../utils/BackButton";

export const ContainerHtml = styled.div`
    background-color: white;
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
    margin-bottom: 1.25rem;
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
