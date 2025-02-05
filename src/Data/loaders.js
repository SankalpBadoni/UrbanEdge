import apiRequest from "./ApiRequest";

export const singlePageLoader = async ({ params }) => {
    try {
        const res = await apiRequest.get(`/properties/${params.id}`); 
        return res.data; 
    } catch (error) {
        throw new Response("Property not found", { status: error.response?.status || 500 });
    }
};