import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { CiUser } from 'react-icons/ci';
// import useAuth from '../hook/useAuth';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handlelogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const links = <>

        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/'}>Home</NavLink></li>
        <li><Link to={''} >Products</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 px-6 py-4 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}>
                    <a className="text-3xl font-medium text-center text-black">BOTANICAL <span><br /></span> <span className='font-normal text-lg font-sans text-green-600'>---- Store ----</span></a>
                </Link>

                {/* <div className="flex uppercase items-center pl-3 gap-2">
                    <img className="w-20 pt-3 items-center" src="logo.png" alt="" />
                    <button className="text-2xl font-extrabold">BOTANICAL<span className="font-normal">Plant</span></button>
                </div> */}

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium items-center">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn  btn-circle avatar  tooltip tooltip-neutral  tooltip-left" data-tip={user.displayName}>
                                <div className="w-12 rounded-full">
                                    <img alt="Profile Pic" src={user.photoURL || <CiUser />} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className='hover:bg-neutral hover:text-lime-600 rounded-lg '><a className='text-sm'><span className='text-lg'>Hi,</span>{user.displayName}!</a></li>
                                {/* <li><a>Settings</a></li> */}
                                {/* <button onClick={handlelogOut}><a>Logout</a></button> */}
                                <button onClick={handlelogOut} className='btn bg-orange-400 w-full text-white'>Logout</button>
                            </ul>
                        </div> :
                        <div>
                            <Link to='/login'><button className='btn bg-green-600 text-white'>Login</button></Link>
                        </div>
                }
            </div>

            {/* <div className='navbar-end'>
                <div>
                    <Link to='/login'><button className='btn bg-green-600 text-white'>Login</button></Link>
                </div>
            </div> */}

        </div>
    );
};

export default Navbar;