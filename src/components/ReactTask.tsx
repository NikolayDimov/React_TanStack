import { HTMLAttributes, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Loader from '../utils/Loader';


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 2px solid #ccc;
    padding: 8px;
    text-align: left;
    background-color: #f4f4f4;
`;

const Td = styled.td`
    border: 2px solid #ccc;
    padding: 8px;
`;

const Tr = styled.tr`
    border: 2px solid #ccc;
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
`;

const PaginationControls = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    $isPlaceholderData: boolean;
}

const Container = styled.div<ContainerProps>`
    background-color: white;
    color: black;
    padding: 20px;
    position: relative;
    opacity: ${props => props.$isPlaceholderData ? 0.6 : 1};
    pointer-events: ${props => props.$isPlaceholderData ? 'none' : 'auto'};
    & > .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Button = styled.button`
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const PageNums = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostResponse {
    posts: Post[];
    total: number;
}

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

    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 0));

    return (
        <Container $isPlaceholderData={isPlaceholderData} id='container'>
            {isPlaceholderData && <Loader />}

            <h2>React Task: Display Posts</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Title</Th>
                        <Th>Body</Th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((post) => (
                        <Tr key={post.id}>
                            <Td>{post.title}</Td>
                            <Td>{post.body}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>

            <PageNums>
                Page {page + 1} / {totalPages}
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
