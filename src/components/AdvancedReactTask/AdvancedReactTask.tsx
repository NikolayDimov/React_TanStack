import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../utils/Loader';
import { Button, ButtonContainer, Container, ErrorMessage, Table, TableWrapper, Td, Th, Title, Tr } from './AdvancedReactTask.style';
import { PostResponse } from './AdvancedReactTask.static';
import { BackButton } from '../../utils/BackButton';
import { advancedFetchPosts } from '../../service/advancedFetchApi';


const AdvanceReactTask: React.FC = () => {
    const [sortBy, setSortBy] = useState<'title' | 'views'>('title');
    const [isSorted, setIsSorted] = useState(true);

    const { data, error, isLoading, isFetching } = useQuery<PostResponse, Error>({
        queryKey: ['posts'],
        queryFn: () => advancedFetchPosts(),
        retry: 2,
        staleTime: 5000,
    });

    if (error instanceof Error) {
        return <ErrorMessage>{error.message}</ErrorMessage>;
    }

    const posts = data?.posts || [];
    const handleSortOrderToggle = () => {
        setIsSorted((prev) => !prev);
    };

    const handleSortByChange = (criterion: 'title' | 'views') => {
        setSortBy(criterion);
    };

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortBy === 'title') {
            return isSorted
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        } else {
            return isSorted
                ? a.views - b.views
                : b.views - a.views;
        }
    });


    return (
        <Container $isFetching={isFetching} id='container'>
            {(isLoading || isFetching) && <Loader />}
            <BackButton to="/">Back to Home</BackButton>
            <Title>React Task: Display Posts</Title>
            <ButtonContainer>
                <Button onClick={() => handleSortByChange('title')}>Sort by Title</Button>
                <Button onClick={() => handleSortByChange('views')}>Sort by Views</Button>
                <Button onClick={handleSortOrderToggle}>Toggle Sort Order</Button>
            </ButtonContainer>
            <TableWrapper>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Content</Th>
                            <Th>Views</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {sortedPosts?.map((post) => (
                            <Tr key={post.id}>
                                <Td>{post.title}</Td>
                                <Td>{post.body}</Td>
                                <Td>{post.views}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>
        </Container>
    );
};


export default AdvanceReactTask;