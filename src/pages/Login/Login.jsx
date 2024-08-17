import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

    const { login, google } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {

        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        login(email, password)
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleGoogle = () => {
        google()
            .then((result) => {
                console.log(result.user)
                navigate('/')
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

                    <div className=" items-center justify-center text-center py-16 lg:mt-16">
                        <img className='rounded-2xl lg:w-[600px] lg:h-[600px] md:h-[500px] md:w-[500px] w-[300px] ml-16' src='login.jpg' alt="" />
                    </div>
                </div>
                <div className="card shrink-0 lg:w-1/3 md:w-[700px] p-8 lg:py-20 md:py-2 py-2">
                    <h1 className="text-4xl font-semibold text-center">Log In</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white bg-green-700">Login</button>
                        </div>

                        <p className='text-center pt-3'>Don't have an account?<Link to={'/register'}> <span className='text-green-500 font-bold'>Create an account</span></Link> </p>
                    </form>

                    <div className="flex  text-center justify-center items-center  ">
                        <p className="border-b "></p>
                        <p className="border-b-2 border-green-400">or</p>
                        <p className="border-b"></p>
                    </div>



                    <div className="form-control mt-2 px-8">
                        {/* <button onClick={handleGoogleLogin} className="btn btn-outline  mt-4 px-8"> <FcGoogle className="text-3xl"></FcGoogle> Google Login</button> */}
                        <button onClick={handleGoogle} className="btn btn-outline  mt-4 px-8"> <FcGoogle className="text-3xl"></FcGoogle> Google Login</button>
                    </div>


                    <div className="form-control mt-2 px-8">
                        <button className="btn btn-outline  "> <FaFacebook className="text-3xl text-blue-700"></FaFacebook> Facebook Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;