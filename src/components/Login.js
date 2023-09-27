import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    // Toggle Sign In Form
    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the Form Data
        // To access email and password we can either use state variables for the inputs
        // Or we can use reference!
        // console.log(email);
        // console.log(password);
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(
            email.current.value,
            password.current.value,
            name.current ? name.current.value : true
        );
        // console.log(message);
        setErrorMessage(message);
        if (message) {
            return;
        }

        // SignIn / SignUp
        if (!isSignInForm) {
            // SignUp Form
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            // SignIn
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
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
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 absolute p-16 bg-black m-auto my-16 right-0 left-0 bg-opacity-80 text-white"
            >
                <h2 className="font-bold text-4xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-2 w-full bg-gray-700 rounded-md"
                    ></input>
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-700 rounded-md"
                ></input>
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-gray-700 rounded-md"
                ></input>
                <p className="text-red-500">{errorMessage}</p>

                <button
                    className="p-4 my-8 bg-red-700 w-full rounded-md"
                    onClick={handleButtonClick}
                >
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
