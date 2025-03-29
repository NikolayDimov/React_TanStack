
import timetable from '../../assets/timetable.png';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import { ContainerHtml, CenteredContent, Title, Content, Wrapper, Table, Tr, Th, TrMain, ThHours, Td, LunchRow } from './HtmlTask.style';
import { BackgroundWrapper } from '../BackgroundVideo/BackgroundVideo.style';
import { BackButton } from '../../utils/BackButton';


const HtmlTask: React.FC = () => {
    return (
        <>
            <BackgroundWrapper>
                <BackgroundVideo />
            </BackgroundWrapper>
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
        </>
    );
};


export default HtmlTask;