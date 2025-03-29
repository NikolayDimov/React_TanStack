import { PostResponse } from "../components/ReactTask/ReactTask.static";
import { HOMEURL } from "../static/constants";

export const advancedFetchPosts = async (): Promise<PostResponse> => {
    try {
        const sortBy = 'title';
        const order = 'asc';

        const response = await fetch(`${HOMEURL}?sortBy=${sortBy}&order=${order}`);

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
