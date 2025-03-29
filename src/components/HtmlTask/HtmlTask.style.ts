import styled from "styled-components";
import { Link } from "react-router";

export const ContainerHtml = styled.div`
    background-color: white;
    color: black;
    padding: 1.25rem;
    width: 87.5rem;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
    z-index: 2;
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

export const BackButton = styled(Link)`
    padding: 0.3125rem 0.625rem;
    background-color: #f1f1f1;
    color: #007bff;
    text-decoration: none;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 0.125rem solid #007bff;
    display: inline-block;

    &:hover {
        background-color: #007bff;
        color: white;
        transform: translateY(-0.125rem);
    }

    &:active {
        background-color: #0056b3;
        color: white;
    }
`;
