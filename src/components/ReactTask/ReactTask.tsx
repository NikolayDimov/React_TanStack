import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Loader from '../../utils/Loader';
import { BackButton, Button, Container, ErrorMessage, PageNums, PaginationControls, Table, TableWrapper, Td, Th, Title, Tr } from './ReactTask.style';
import { PostResponse } from './ReactTask.static';


const fetchPosts = async (skip: number, limit: number): Promise<PostResponse> => {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    console.log('data', data)
    return data;
};

export const ReactTask = () => {
    const [page, setPage] = useState(0);
    const limit = 10;

    const { data, error, isPlaceholderData } = useQuery({
        queryKey: ['posts', page],
        queryFn: () => fetchPosts(page * limit, limit),
        placeholderData: keepPreviousData,
        retry: 2,
    });

    const posts = data?.posts || [];
    const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;
    console.log('totalPages', totalPages)

    if (error instanceof Error) return <ErrorMessage>{error.message}</ErrorMessage>;

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
        <Container $isPlaceholderData={isPlaceholderData} id='container'>
            {isPlaceholderData && <Loader />}
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
