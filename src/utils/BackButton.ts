import { Link } from "react-router";
import styled from "styled-components";

export const BackButton = styled(Link)`
    padding: 0.625rem 1.25rem;
    background-color: #f1f1f1;
    color: #007bff;
    text-decoration: none;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 0.125rem solid #007bff;
    display: inline-block;
    position: relative;


    &:hover {
        background-color: #007bff;
        color: white;
        transform: translateY(-0.125rem);
    }

    &:active {
        background-color: #0056b3;
        color: white;
    }

    @media (max-width: 800px) {
        text-align: center; 
        display: block;
        margin: 0 auto; 
    }
`;