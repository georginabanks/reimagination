import axios from "axios";

export const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
};


export const getPages = async () => {
	const data = await axios.get("/api/pages", axiosConfig);
	return data.data;
};

export const getClients = async () => {
	const data = await axios.get("/api/clients", axiosConfig);
	return data.data;
};