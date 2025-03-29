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