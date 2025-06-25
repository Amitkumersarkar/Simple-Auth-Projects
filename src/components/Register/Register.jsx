import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../Firebase.init";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
const Register = () => {

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // reset error and status
        setErrorMessage('');
        setSuccess(false);
        // create user with email and password
        if (password.length < 6) {
            setErrorMessage('password should be 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);
                //send verification user email
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Verification email sent');
                    })

            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorMessage(errorMessage.message)
                setSuccess(false);
            })

    }
    return (
        <div className="bg-dark flex items-center justify-center min-h-screen">
            <div className="bg-cyan-600 p-6 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-xl font-semibold mb-4 text-center">Create an Account</h1>

                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <div className="mb-6 relative">
                        <label className=" block mb-1 text-sm text-gray-600">Password</label>
                        <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-8 bg-transparent text-xl">
                            {
                                showPassword ? <IoEyeOffSharp /> : <MdOutlineRemoveRedEye />
                            }
                        </button>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                {
                    errorMessage && <p className="text-red-700 font-semibold ">{errorMessage}</p>

                }
                {
                    success && <p className="text-shadow-orange-600">Register Successfully</p>
                }
                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-purple-600 font-medium hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;