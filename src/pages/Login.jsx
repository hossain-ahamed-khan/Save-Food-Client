import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setLoginError("Incorrect Email or Password");
            })
    }

    // google login 

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    // github login 

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate("/");
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
                            <button className="btn bg-[#803D3B] text-slate-100">Login</button>
                        </div>
                    </form>

                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="w-2/5 btn btn-outline btn-success mr-2">Google login</button>
                        <button onClick={handleGithubSignIn} className="w-2/5 btn btn-outline ">Github login</button>
                    </div>

                    <div className="text-center my-6">
                        I have no account. Want to <Link className="font-bold text-[#803D3B]" to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
