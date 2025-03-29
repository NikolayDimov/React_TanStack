import styled from 'styled-components';
import { Link } from 'react-router';
import { ContainerProps } from './ReactTask.static';

export const Title = styled.h2`
    margin: 2.5rem 0 1.25rem 0;
    text-align: center;
    font-size: 2rem; 
    color: #333;
    font-weight: 600;
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    margin-top: 1.25rem;
`;

export const Table = styled.table`
    width: 80%;
    max-width: 75rem; 
    border-collapse: collapse;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
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

export const PaginationControls = styled.div`
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
    gap: 0.625rem;
`;

export const Container = styled.div<ContainerProps>`
    position: relative;
    background-color: white;
    color: black;
    padding: 1.25rem;
    opacity: ${props => props.$isPlaceholderData ? 0.6 : 1};
    pointer-events: ${props => props.$isPlaceholderData ? 'none' : 'auto'};

    & > .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
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

export const PageNums = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    color: #333;
`;

