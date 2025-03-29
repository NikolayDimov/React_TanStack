import { HTMLAttributes } from 'react';

export interface Post {
    id: number;
    title: string;
    body: string;
    views: number;
}

export interface PostResponse {
    posts: Post[];
    total: number;
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    $isFetching: boolean;
}