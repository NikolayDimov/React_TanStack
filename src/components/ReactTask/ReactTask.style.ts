import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

export const Title = styled.h2`
    margin: 40px 0 20px 0;
    text-align: center;
    font-size: 2rem; 
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    margin-top: 20px;
`;

export const Table = styled.table`
    width: 80%;
    max-width: 1200px; 
    border-collapse: collapse;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
`;

export const Th = styled.th`
    text-align: center;
    border: 2px solid #ddd;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 5px 5px 0 0;

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
    border: 2px solid #ddd;
    padding: 5px 10px;
    font-size: 0.8rem; 
    color: #555;
    background-color: #f9f9f9;
    text-align: left;
    border-radius: 0 0 5px 5px;

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
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    $isPlaceholderData: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    background-color: white;
    color: black;
    padding: 20px;
    position: relative;
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
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
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
    margin-top: 20px;
    font-size: 1.2rem;
    color: #333;
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