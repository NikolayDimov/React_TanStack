import styled from 'styled-components';
import timetable from '../assets/timetable.png';
import { Link } from 'react-router';

const ContainerHtml = styled.div`
    background-color: white;
    color: black;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
`;

const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
`;

const Title = styled.h2`
    margin-bottom: 20px
`;

const Content = styled.div`
    margin-bottom: 20px
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
    font-weight: normal;
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

export const HtmlTask = () => {
    return (
        <ContainerHtml>
            <BackButton to="/">Back to Home</BackButton>
            <CenteredContent>
                <Title>This is the HTML task. (10-15 min)</Title>
                <Content>Build a table according to the design provided in the image. (only HTML)</Content>
                <img src={timetable} width={300} alt="Timetable Design" />
            </CenteredContent>

            <Wrapper>
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
            </Wrapper>
        </ContainerHtml>
    );
};
