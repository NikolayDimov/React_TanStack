import styled from 'styled-components';
import timetable from '../assets/timetable.png';
import { Link } from 'react-router';

const ContainerHtml = styled.div`
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

const Table = styled.table`
    font-family: "Times New Roman", serif;
    border: 2px solid black;
    border-collapse: collapse;
    width: 20%;
`;

const Th = styled.th`
    border: 2px solid black;
    text-align: center;
`;

const ThHours = styled.th`
    border: 2px solid black;
    text-align: center;
    font-weight: normal
`;

const Td = styled.td`
    border: 2px solid black;
`;

const Tr = styled.tr`
    border: 2px solid black;
    text-align: left;
`;

const TrMain = styled.tr`
    border: 2px solid black;
    text-align: center;
`;

const LunchRow = styled.tr`
    font-weight: bold;
    text-align: center;
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

export const HtmlTask = () => {
    return (
        <ContainerHtml>
            <h2>This is the HTML task. (10-15 min)</h2>
            <p>Build a table according to the design provided in the image. (only HTML)</p>
            <img src={timetable} width={300} alt="Timetable Design" />

            <Table>
                <thead>
                    <Tr>
                        <Th colSpan={6}>Time Table</Th>
                    </Tr>
                </thead>
                <tbody>
                    <TrMain>
                        <ThHours rowSpan={6}>Hours</ThHours>
                        <Th>mon</Th>
                        <Th>tues</Th>
                        <Th>Wed</Th>
                        <Th>Thrus</Th>
                        <Th>Fri</Th>
                    </TrMain>
                    <Tr>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Arts</Td>
                    </Tr>
                    <Tr>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Arts</Td>
                    </Tr>
                    <LunchRow>
                        <Td colSpan={5}>Lunch</Td>
                    </LunchRow>
                    <Tr>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td rowSpan={2}>Project</Td>
                    </Tr>
                    <Tr>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                        <Td>Science</Td>
                        <Td>Maths</Td>
                    </Tr>
                </tbody>
            </Table>
            <BackButton to="/">Back to Home</BackButton>
        </ContainerHtml>
    );
};
