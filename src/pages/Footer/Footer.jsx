import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" p-10 bg-base-200 text-base-content grid mt-32 ">

            <footer className="footer  bg-base-200 text-base-content grid ">
                <aside className="flex flex-col">
                    <div className="flex items-center gap-3 ">
                        <img className="w-16" src='logo food.png' alt="" />
                        <div className=" workSans text-3xl text-green-800 font-bold gap-0">
                            <Link to={'/'} className="gap-0 items-center">
                                Botanical Store<span className="text-red-500"></span>
                            </Link>
                        </div>
                    </div>
                    <p className="font-semibold">Simple Way of Eating Delicious</p>
                    <nav className=" pb-8 pt-4 ">
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com"><FaFacebook className="text-3xl text-blue-700"></FaFacebook></a>
                            <a href="https://twitter.com"><FaTwitter className="text-3xl text-sky-400"></FaTwitter></a>
                            <a href="https://github.com/abdullahrafi1234"><FaGithub className="text-3xl"></FaGithub></a>
                            <a href="https://www.instagram.com"><FaInstagram className="text-3xl text-red-400"></FaInstagram></a>
                        </div>
                    </nav>
                </aside>
                <nav>
                    <h6 className="footer-title">Our Services</h6>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Tracking</a>
                    <a className="link link-hover">Report a Bug</a>
                    <a className="link link-hover">Terms of Services</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Our Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Management</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Address</h6>
                    <a className="link link-hover">Mohammadpur, Dhaka</a>
                    <a className="link link-hover">(+88) 01722438145</a>
                    <a className="link link-hover">rafibhuiyan1234@gmail.com</a>
                </nav>
            </footer>
            <div className="font-semi-bold text-center">
                <aside className="border-t border-green-300 pt-3">
                    <p>Copyright © 2024 - All right reserved by Botanical Industries Ltd</p>
                </aside>
            </div>
        </div>


    );
};

export default Footer;