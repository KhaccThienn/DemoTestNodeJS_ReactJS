import * as http from "../Http/Http";

const baseURL = "http://localhost:8000";

export const getAll = async () => {
    try {
        const res = await http.get(`${baseURL}/api/people`);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const postData = async (data) => {
    try {
        const res = await http.post(`${baseURL}/api/people`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
}