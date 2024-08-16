
import Products from '../../Hook/Products';

const Featured = () => {

    const [products] = Products()
    console.log(products)


    return (

        <div>
            {/* featured section */}
            <div className='mb-16'>
                <p className="animate__animated animate__flipInX  text-4xl  text-center font-bold mt-32">Featured Properties</p>
                <p className="border-b border-green-300 p-2 text-center w-96 mx-auto"></p>
            </div>




            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">

                {
                    products?.map((product) =>
                        <div key={product._id} className="border border-gray-600 space-y-2 px-6 py-4 ">


                            <img src={product.image} alt={product.image} className="border " />
                            <h2 className="font-bold ml-2">Name: {product.name}</h2>
                            <h3 className="font-medium ml-2 "><span className="font-bold"> Category:</span> {product.category}</h3>
                            <p className="text-center ml-2 w-fit">Description: {product.description}</p>
                            <h4 className="ml-2 font-semibold ">PRICE: {product.price} $</h4>
                            {/* <h5>{new Date(product.timestamp).toLocaleString()}</h5> */}



                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Featured;