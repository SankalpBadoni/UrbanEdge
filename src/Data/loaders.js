import { defer } from "react-router-dom";
import apiRequest from "./ApiRequest";

export const singlePageLoader = async ({ params }) => {
    try {
        const res = await apiRequest.get(`/properties/${params.id}`); 
        console.log(res.data);
        return res.data; 
    } catch (error) {
        throw new Response("Property not found", { status: error.response?.status || 500 });
    }
};

export const listPageLoader = async ({request, params }) => {
    // console.log(request)
    const query = request.url.split("?")[1]
    const res = await apiRequest.get(`/properties?${query}`); 
    return res.data; 
    
};
export const profilePageLoader = async () => {
    try {
        const postPromise = await apiRequest("/users/profilePosts");
        return defer({
            postResponse: postPromise
        });
    } catch (error) {
        console.error("Error loading profile posts:", error);
        throw error;
    }
    
};