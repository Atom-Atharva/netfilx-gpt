import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userAvailable, setUserAvailable] = useState(false);
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                // console.log(user);
                dispatch(removeUser);
                // console.log(user);
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
                setUserAvailable(true);
            } else {
                // User is signed out
                // console.log(user);
                dispatch(removeUser);
                // console.log(user);
                navigate("/");
                setUserAvailable(false);
            }
        });

        // Unsubscribe when component unmounts--
        return () => unsubscribe();
    }, [navigate, dispatch, setUserAvailable]);

    return (
        <div className="absolute w-screen px-12 py-4 bg-gradient-to-b from-black fill-red-600 z-10 flex justify-between">
            <LOGO />
            {userAvailable && (
                <div className="m-4 flex">
                    <img
                        className="w-8 h-8 m-2"
                        src={user?.photoURL}
                        alt="profile-img"
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
