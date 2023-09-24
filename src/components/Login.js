import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    // Toggle Sign In Form
    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                />
            </div>
            <form className="w-3/12 absolute p-16 bg-black m-auto my-36 right-0 left-0 bg-opacity-80 text-white">
                <h2 className="font-bold text-4xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-2 w-full bg-gray-700 rounded-md"
                    ></input>
                )}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-700 rounded-md"
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-gray-700 rounded-md"
                ></input>
                <button className="p-4 my-8 bg-red-700 w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now!"
                        : "Already a User? Sign In Now!"}
                </p>
            </form>
        </div>
    );
};

export default Login;
