import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";


const Signup = () => {

    const [signupError, setSignupError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const handleSignup = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const password = form.get('password');


        if (password.length < 6) {
            setSignupError('Password should be at least 6 character long');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setSignupError('Password should contain at least one uppercase letter');
            return;
        }

        else if (!/[a-z]/.test(password)) {
            setSignupError('Password should contain at least one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // new user has been created 
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };

                fetch("https://art-and-crafts-server.vercel.app/user", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                        </div>

                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <span className="absolute right-3 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>

                        {
                            signupError && <p className="text-red-700">{signupError}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF8800] font-bold">Signup</button>
                        </div>
                    </form>

                    <div className="text-center mb-8">
                        Already have no account. Want to <Link className="font-bold text-[#FF8800]" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;