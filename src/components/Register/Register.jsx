
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="bg-dark flex items-center justify-center min-h-screen">
            <div className="bg-blue-400 p-6 rounded-lg shadow-md w-full max-w-sm">
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

                    <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600">Password</label>
                        <input
                            type="password"
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