import React from 'react';

const Banner = () => {
    return (
        // <div className='mt-16'>
        //     <div className='mb-16'>
        //         <p className=' flex items-center justify-center text-center'>
        //             <img src="featured.JPG" alt="" />
        //         </p>
        //         <p className="animate__animated animate__flipInX  text-5xl  text-center font-bold ">Welcome to Botanical Store</p>
        //     </div>

        //     <div className='grid md:grid-cols-2 grid-cols-1 gap-16 text-center  '>
        //         <div>
        //             <p className=' flex items-center justify-center text-center'>
        //                 <img src="icon1.1.png" alt="" />
        //             </p>
        //             <h3 className='uppercase'>100% Organic
        //             </h3>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        //         </div>
        //         <div>
        //             <p className=' flex items-center justify-center text-center'>
        //                 <img src="icon2.2.png" alt="" />
        //             </p>
        //             <h3 className='uppercase'>family healthy
        //             </h3>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //         </div>
        //         <div>
        //             <p className=' flex items-center justify-center text-center'>
        //                 <img src="icon3.3.png" alt="" />
        //             </p>
        //             <h3 className='uppercase'>Always Fresh
        //             </h3>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //         </div>
        //         <div>
        //             <p className=' flex items-center justify-center text-center'>
        //                 <img src="icon4.4.png" alt="" />
        //             </p>
        //             <h3 className='uppercase'>Food safety
        //             </h3>
        //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting .</p>
        //         </div>


        //     </div>

        // </div>
        <div className=''> 
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/wp83dyV/blog-01.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <p className='text-green-400 font-bold'>Orgnici Products</p>
                        <h1 className="mb-5 text-5xl font-bold">Fresh Foods</h1>
                        <p className="mb-5">
                        There are many variations of passages of Lorem Ipsum available
                        </p>
                        <button className="btn border-0 bg-green-500 text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;