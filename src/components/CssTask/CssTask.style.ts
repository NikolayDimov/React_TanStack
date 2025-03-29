import styled from 'styled-components';
import './style.css';
import { Link } from 'react-router';

export const ContainerCss = styled.div`
    background-color: white;
    color: black;
    padding: 20px;
    width: 1400px;
    margin: 0 auto; 
    min-height: 100vh;
    position: relative; 
    z-index: 2; 
`;

export const BackButton = styled(Link)`
    padding: 10px 20px;
    background-color: #f1f1f1;
    color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 2px solid #007bff;
    margin-top: 30px;
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

export const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
`;