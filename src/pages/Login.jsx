import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import axios from "axios";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { signIn, signInWithGoogle, signInWithGithub } = useAuth();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                const user = { email };

                axios.post('https://save-food-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate("/");
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                setLoginError("Incorrect Email or Password");
            })
    }

    // google login 

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user.email;
                axios.post('https://save-food-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate("/");
                        }
                    })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    // github login 

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user.email;
                axios.post('https://save-food-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate("/");
                        }
                    })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                            loginError && <p className="text-red-700">{loginError}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF8800] font-bold">Login</button>
                        </div>
                    </form>

                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="w-2/5 btn btn-outline btn-success mr-2">Google login</button>
                        <button onClick={handleGithubSignIn} className="w-2/5 btn btn-outline ">Github login</button>
                    </div>

                    <div className="text-center my-6">
                        I have no account. Want to <Link className="font-bold text-[#FF8800]" to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
