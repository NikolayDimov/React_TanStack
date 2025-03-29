import { PostResponse } from "../components/ReactTask/ReactTask.static";
import { HOMEURL } from "../static/constants";

export const fetchPosts = async (skip: number, limit: number): Promise<PostResponse> => {
    try {
        const response = await fetch(`${HOMEURL}?limit=${limit}&skip=${skip}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};
