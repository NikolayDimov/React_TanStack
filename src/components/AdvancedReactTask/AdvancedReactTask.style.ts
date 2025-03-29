import styled from 'styled-components';
import { ContainerProps } from './AdvancedReactTask.static';

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

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    margin-top: 1.25rem;
    overflow-x: auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const Table = styled.table`
    width: 100%;
    max-width: 75rem; 
    border-collapse: collapse;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;

    @media (max-width: 800px) {
        font-size: 0.9rem;
        width: 100%;
        max-width: 100%;
        display: block;
        overflow-x: auto;
        padding: 1rem;
    }
`;

export const Th = styled.th`
    text-align: center;
    border: 0.125rem solid #ddd;
    padding: 0.625rem 0.9375rem;
    background-color: #007bff;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.03125rem;
    border-radius: 0.3125rem 0.3125rem 0 0;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Tr = styled.tr`
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
        td {
            background-color: #e0e0e0;
        }
    }
`;

export const Td = styled.td`
    border: 0.125rem solid #ddd;
    padding: 0.3125rem 0.625rem;
    font-size: 0.8rem; 
    color: #555;
    background-color: #f9f9f9;
    text-align: left;
    border-radius: 0 0 0.3125rem 0.3125rem;

    &:nth-child(even) {
        background-color: #f1f1f1;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
    text-align: center;
`;

export const Container = styled.div<ContainerProps>`
    position: relative;
    background-color: #EEEEEE;
    color: black;
    padding: 1.25rem;
    opacity: ${props => props.$isFetching ? 0.6 : 1};
    pointer-events: ${props => props.$isFetching ? 'none' : 'auto'};

    & > .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        padding: 0.25rem; 
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #0056b3;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    margin: 0 auto;

    button {
        white-space: nowrap;
    }

    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        gap: 10px;
        width: 100%;
    }
`;

