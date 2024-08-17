import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://botanical-store-server.vercel.app'
})

const useAxiosPublic = () => {
 
    return axiosPublic
};

export default useAxiosPublic;