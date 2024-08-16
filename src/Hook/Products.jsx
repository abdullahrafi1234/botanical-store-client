
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Products = () => {
    const axiosPublic = useAxiosPublic()
    const url = '/products'

    const { data: products = [], refetch, isPending } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(url)
            return res.data
        }
    })
    return [products, refetch, isPending]
};

export default Products;

