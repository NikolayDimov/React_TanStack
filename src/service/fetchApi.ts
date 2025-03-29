import { PostResponse } from "../components/ReactTask/ReactTask.static";
import { HOMEURL } from "../static/constants";

export const fetchPosts = async (skip: number, limit: number): Promise<PostResponse> => {
    const response = await fetch(`${HOMEURL}?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    console.log('data', data)
    return data;
};