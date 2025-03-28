import { HTMLAttributes, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Loader from '../utils/Loader';
import { Link } from 'react-router';

const Title = styled.h2`
    margin: 40px 0 20px 0;
    text-align: center;
    font-size: 2rem; 
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    margin-top: 20px;
`;

const Table = styled.table`
    width: 80%;
    max-width: 1200px; 
    border-collapse: collapse;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
`;

const Th = styled.th`
    text-align: center;
    border: 2px solid #ddd;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 5px 5px 0 0;

    &:hover {
        background-color: #0056b3;
    }
`;

const Tr = styled.tr`
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
        td {
            background-color: #e0e0e0;
        }
    }
`;

const Td = styled.td`
    border: 2px solid #ddd;
    padding: 5px 10px;
    font-size: 0.8rem; 
    color: #555;
    background-color: #f9f9f9;
    text-align: left;
    border-radius: 0 0 5px 5px;

    &:nth-child(even) {
        background-color: #f1f1f1;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
    text-align: center;
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
    position: relative;
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
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover {
        background-color: #0056b3;
    }
`;

const PageNums = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #333;
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

interface Post {
    id: number;
    title: string;
    body: string;
    views: number;
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

            <Title>React Task: Display Posts</Title>
            <TableWrapper>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Body</Th>
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
            <BackButton to="/">Back to Home</BackButton>
        </Container>
    );
};
