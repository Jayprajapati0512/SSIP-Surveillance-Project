import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login & sign up
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPass = localStorage.getItem("password");

        if (email === storedEmail && password === storedPass) {
            alert("Login Successful! 🎉");
            setEmail(""); // Clear email field
            setPassword(""); // Clear password field
            navigate("/"); // Redirect to home
        } else {
            alert("Invalid Credentials ❌");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            alert("All fields are required! 🚨");
            return;
        }
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign-up successful! Now login 😊");
        setIsLogin(true); // Show login UI
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                {isLogin ? (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                                Login
                            </button>
                        </form>
                        <p className="text-center mt-4 text-gray-600">
                            New user?{" "}
                            <button onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">
                                Sign Up
                            </button>
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                        <form onSubmit={handleSignUp} className="space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                                Sign Up
                            </button>
                        </form>
                        <p className="text-center mt-4 text-gray-600">
                            Already have an account?{" "}
                            <button onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">
                                Login
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Auth;