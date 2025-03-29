import styled from 'styled-components';
import { Link } from 'react-router';

export const ContainerHtml = styled.div`
    background-color: white;
    color: black;
    padding: 20px;
    width: 1400px;
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
    margin-bottom: 40px;
`;

export const Title = styled.h2`
    margin-bottom: 20px
`;

export const Content = styled.div`
    margin-bottom: 20px
`;

export const Table = styled.table`
    font-family: "Times New Roman", serif;
    border: 2px solid black;
    border-collapse: collapse;
    width: 20%;
`;

export const Th = styled.th`
    border: 2px solid black;
    text-align: center;
`;

export const ThHours = styled.th`
    border: 2px solid black;
    text-align: center;
    font-weight: normal;
`;

export const Td = styled.td`
    border: 2px solid black;
`;

export const Tr = styled.tr`
    border: 2px solid black;
    text-align: left;
`;

export const TrMain = styled.tr`
    border: 2px solid black;
    text-align: center;
`;

export const LunchRow = styled.tr`
    font-weight: bold;
    text-align: center;
`;

export const BackButton = styled(Link)`
    padding: 5px 10px;
    background-color: #f1f1f1;
    color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 2px solid #007bff;
    display: inline-block;

    &:hover {
        background-color: #007bff;
        color: white;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #0056b3;
        color: white;
    }
`;