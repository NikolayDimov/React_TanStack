import styled from 'styled-components';
import timetable from './assets/timetable.png';

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
`;

const TrMain = styled.tr`
    border: 2px solid black;
    text-align: center;
`;

const LunchRow = styled.tr`
    font-weight: bold;
    text-align: center;
`;

export const HtmlTask = () => {
    return (
        <>
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
        </>
    );
};
