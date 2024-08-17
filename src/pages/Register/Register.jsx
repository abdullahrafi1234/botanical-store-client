import React, { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { createEmail, update } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)

        createEmail(email, password, name, photo)
            .then((result) => {
                console.log(result)

                update(name, photo)
                    .then((result) => {
                        console.log(result)
                    })
                    .catch()


            })
            .catch((error) => {
                console.error(error)

            })
    }

    return (

        <div className="">
            {/* <Helmet>
                <title>Foody | Login</title>
            </Helmet> */}

            <div className=" text-center md:items-center lg:items-start flex flex-col lg:flex-row gap-2 ">
                <div className=" items-center justify-center text-center lg:text-left lg:w-1/2 rounded-lg">

                    <div className=" items-center justify-center text-center py-16 lg:mt-6">
                        <img className='rounded-2xl lg:w-[600px] lg:h-[600px] md:h-[500px] md:w-[500px] w-[300px] ml-16' src='login.jpg' alt="" />
                    </div>
                </div>
                <div className="card shrink-0 lg:w-1/3 md:w-[700px] p-8 lg:py-20 md:py-2 py-2">
                    <h1 className="text-3xl font-semibold text-center">Create Your Account!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white bg-green-600">Register</button>
                        </div>
                        {/* <p className="text-red-600 text-center">{error}</p> */}


                        <p className='text-center pt-3'>Already have an account?<Link to={'/login'}> <span className='text-green-500 font-bold'>Please Login</span></Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;