import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://botanical-plant-store-server-kp1f5k1xd.vercel.app'
})

const useAxiosPublic = () => {
 
    return axiosPublic
};

export default useAxiosPublic;