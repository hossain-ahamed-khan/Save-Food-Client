import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/available-foods">Available Foods</Link></li>
                            <li><Link to="/add-food">Add Food</Link></li>
                            <li><Link to="/manage-my-foods">Manage My Foods</Link></li>
                            <li><Link to="/my-food-request">My Food Request</Link></li>
                        </ul>
                    </div>
                    <img className="w-12 h-12 mr-2" src="https://i.ibb.co/RHYJy4P/339043-PA8-CZ6-38.jpg" alt="" />
                    <Link to="/" className="text-3xl font-bold text-[#ff8800]">Save Food</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/available-foods">Available Foods</Link></li>
                        <li><Link to="/add-food">Add Food</Link></li>
                        <li><Link to="/manage-my-foods">Manage My Foods</Link></li>
                        <li><Link to="/my-food-request">My Food Request</Link></li>
                    </ul>
                </div>


                {
                    user ?
                        <div className="navbar-end">
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img className="w-10 h-10 rounded-full mr-4" src={user.photoURL} alt="" />
                            </div>

                            <Link onClick={handleLogOut} to="" className="btn">Log out</Link>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className="btn">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;