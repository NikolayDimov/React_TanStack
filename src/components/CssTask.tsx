import styled from 'styled-components';
import csstest from '../assets/csstest.png';
import '../style.css';
import { Link } from 'react-router';

const ContainerCss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    background-color: white;
    min-height: 100vh;
    width: 100vw;
    color: black;
    padding-top: 20px;
`;

const BackButton = styled(Link)`
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


export const CssTask = () => {
    return (
        <ContainerCss>
            <h2>This is the CSS task. (5-10 min)</h2>
            <p>Build the layout shown in the image below using HTML and CSS.</p>

            <img src={csstest} width={300} />

            <div className="main">
                <div className="square"></div>
            </div>
            <BackButton to="/">Back to Home</BackButton>
        </ContainerCss>
    );
};
