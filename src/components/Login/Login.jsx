import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../Firebase.init";
import { useState } from "react";

const Login = () => {
    //declared state to success message
    const [success, setSuccess] = useState(false);

    //declared state for error message
    const [loginError, setLoginError] = useState('');
    const handleLogin = (e) => {
        // stop reloading
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // reset status shown here
        // by default status
        setSuccess(false);
        //reset login error message status by default
        setLoginError('');

        // log in user
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                // after successful status
                if (!result.user.emailVerified) {
                    setLoginError('please verify your email')
                }
                else {
                    setSuccess(true)
                }
                // setSuccess(true);
                // login error message
                setLoginError(error.message);
            })
            .then(error => {
                console.log('ERROR', error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-6 px-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome Back</h1>
                    <p className="py-6 text-gray-600">
                        Please log in to your account to access your dashboard and continue exploring.
                        We’re glad to have you back!
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                        <div className="card-body space-y-4">
                            <div>
                                <label htmlFor="email" className="label font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="label font-medium">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="flex justify-between text-sm">
                                <a href="#" className="link link-hover">Forgot password?</a>
                                <NavLink to='/register'>
                                    <a href="#" className="link link-hover">Create an account</a>
                                </NavLink>
                            </div>

                            <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
                        </div>
                    </form>
                    {/* show success message  */}
                    {
                        success && <p className="text-green-500">User Login successfully</p>
                    }
                    {/* show login error message */}
                    {
                        loginError && <p className="text-red-400">{loginError}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;