import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

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
                    // console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            // Profile updated!
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            // An error occurred
                            setErrorMessage(error.message);
                        });
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
                    // console.log(user);
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
            <div className="fixed">
                <img
                    className="h-screen object-cover md:h-full"
                    src={BG_URL}
                    alt="background"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-10/12 my-20 md:w-3/12 absolute p-16 bg-black m-auto md:my-16 right-0 left-0 bg-opacity-80 text-white"
            >
                <h2 className="font-bold text-3xl md:text-4xl py-4">
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
