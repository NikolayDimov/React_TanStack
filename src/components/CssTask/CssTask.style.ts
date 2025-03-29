import styled from "styled-components";
import "./style.css";
import { Link } from "react-router";

export const ContainerCss = styled.div`
    background-color: white;
    color: black;
    padding: 1.25rem;
    width: 87.5rem;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
    z-index: 2;
`;

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
    margin-top: 1.875rem;
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

export const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 2.5rem;
`;

export const Container = styled.div`
    width: 18.75rem;
    height: 14.125rem;
    background-color: #62374e;
    position: relative;
`;

export const Square = styled.div`
    width: 2.4rem;
    height: 2.4rem;
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
