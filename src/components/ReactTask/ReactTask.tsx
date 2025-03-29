import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Loader from '../../utils/Loader';
import { Button, Container, ErrorMessage, PageNums, PaginationControls, Table, TableWrapper, Td, Th, Title, Tr } from './ReactTask.style';
import { PostResponse } from './ReactTask.static';
import { fetchPosts } from '../../service/fetchApi';
import { BackButton } from '../../utils/BackButton';


const ReactTask: React.FC = () => {
    const [page, setPage] = useState(0);
    const limit = 10;

    const { data, error, isLoading, isFetching } = useQuery<PostResponse, Error>({
        queryKey: ['posts', page],
        queryFn: () => fetchPosts(page * limit, limit),
        placeholderData: keepPreviousData,
        retry: 2,
        // refetchInterval: 5000,
        staleTime: 5000,
    });

    const posts = data?.posts || [];
    const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;

    if (error instanceof Error) {
        return <ErrorMessage>{error.message}</ErrorMessage>;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth'
        });
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
        scrollToTop();
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
        scrollToTop();
    };

    return (
        <Container $isFetching={isFetching} id='container'>
            {(isLoading || isFetching) && <Loader />}

            <BackButton to="/">Back to Home</BackButton>
            <Title>React Task: Display Posts</Title>
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
                        {posts?.map((post) => (
                            <Tr key={post.id}>
                                <Td>{post.title}</Td>
                                <Td>{post.body}</Td>
                                <Td>{post.views}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>

            <PageNums>
                Page {page + 1} of {totalPages}
            </PageNums>

            <PaginationControls>
                <Button onClick={handlePreviousPage} disabled={page === 0}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={page + 1 >= totalPages}>
                    Next
                </Button>
            </PaginationControls>
        </Container>
    );
};


export default ReactTask;